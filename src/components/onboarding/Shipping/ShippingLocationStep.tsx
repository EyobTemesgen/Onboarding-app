
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group/radio-group";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft, Home, Business as Building2, LocalShipping as Truck, Schedule as Clock } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { StepProps } from "../types";
import { useShippingStyles } from "./styled";
import { SHIPPING_LOCATION_OPTIONS } from "./const.tsx";

const ShippingLocationStep = ({ data, updateData, onNext, onPrev }: StepProps) => {
  const classes = useShippingStyles();

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
        options={SHIPPING_LOCATION_OPTIONS}
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
