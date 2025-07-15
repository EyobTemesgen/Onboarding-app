
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group.tsx";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { StepProps } from "../types";
import { useInventoryTrackingStyles } from "./styled";
import { INVENTORY_TRACKING_OPTIONS } from "./const.tsx";

const InventoryTrackingStep = ({ data, updateData, onNext, onPrev }: StepProps) => {
  const classes = useInventoryTrackingStyles();

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    updateData("inventoryTracking", value);
  };

  const canProceed = data.inventoryTracking !== "";

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
          How do you track inventory now?
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#475569',
            fontSize: '16px',
            lineHeight: '24px'
          }}
        >
          Don't worry—we'll work with what you have and eliminate the pain points.
        </Typography>
      </Box>

      <RadioGroup
        value={data.inventoryTracking}
        onChange={handleSelect}
        options={INVENTORY_TRACKING_OPTIONS}
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
          Set Up My System
          <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default InventoryTrackingStep;
