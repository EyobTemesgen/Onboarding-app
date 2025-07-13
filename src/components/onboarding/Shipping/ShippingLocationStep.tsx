
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft, Home, Business as Building2, LocalShipping as Truck, Schedule as Clock } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { StepProps } from "../types";
import { useShippingStyles } from "./styled";

const ShippingLocationStep = ({ data, updateData, onNext, onPrev }: StepProps) => {
  const classes = useShippingStyles();

  const options = [
    { 
      value: "home", 
      label: <><strong>Home-based business</strong><br /><span style={{fontWeight:400}}>We'll set up a simple, efficient fulfillment process.</span></>
    },
    { 
      value: "warehouse", 
      label: <><strong>Warehouse or storage facility</strong><br /><span style={{fontWeight:400}}>Perfect for scaling operations and managing larger inventories.</span></>
    },
    { 
      value: "retail", 
      label: <><strong>Retail store with backroom</strong><br /><span style={{fontWeight:400}}>We'll optimize your existing space for both sales and fulfillment.</span></>
    },
    { 
      value: "third_party", 
      label: <><strong>Third-party fulfillment</strong><br /><span style={{fontWeight:400}}>We'll integrate with your fulfillment partners for seamless operations.</span></>
    },
    { 
      value: "multiple", 
      label: <><strong>Multiple locations</strong><br /><span style={{fontWeight:400}}>We'll coordinate inventory across all your locations efficiently.</span></>
    }
  ];

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    updateData("shippingLocation", value);
  };

  const canProceed = data.shippingLocation !== "";

  return (
    <Box className={classes.container}>
      <Box className={classes.headerSection}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#0f172a',
            fontSize: '24px', 
            lineHeight: '32px'
          }}
        >
          Where do you fulfill orders?
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#475569',
            fontSize: '16px',
            lineHeight: '24px'
          }}
        >
          We'll configure the right fulfillment workflow for your operations.
        </Typography>
      </Box>

      <RadioGroup
        value={data.shippingLocation}
        onChange={handleSelect}
        options={options}
        variant="card"
      />

      <Box className={classes.buttonContainer}>
        <Button variant="outline" onClick={onPrev} className={classes.backButton}>
          <ArrowLeft sx={{ mr: 2, width: 16, height: 16 }} />
          Back
        </Button>
        <Button 
          onClick={onNext} 
          disabled={!canProceed}
          className={classes.nextButton}
        >
          Continue
          <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default ShippingLocationStep;
