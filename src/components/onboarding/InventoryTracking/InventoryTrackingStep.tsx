
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group.tsx";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { useInventoryTrackingStyles } from "./styled";
import { INVENTORY_TRACKING_OPTIONS } from "./const.tsx";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { optionTitleStyle, optionDescStyle } from '@/theme/globalStyles';

const InventoryTrackingStep = () => {
  const { onboardingData, setOnboardingData, currentStep, setCurrentStep } = useOnboarding();
  const classes = useInventoryTrackingStyles();

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setOnboardingData(prev => ({ ...prev, inventoryTracking: value }));
  };

  const canProceed = onboardingData.inventoryTracking !== "";

  const onNext = () => setCurrentStep(currentStep + 1);
  const onPrev = () => setCurrentStep(currentStep - 1);

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
        value={onboardingData.inventoryTracking}
        onChange={handleSelect}
        options={INVENTORY_TRACKING_OPTIONS.map(({ icon, ...option }) => ({
          ...option,
          label: (
            <Box>
              <Typography sx={optionTitleStyle}>
                {option.label.split('\n')[0]}
              </Typography>
              <Typography sx={optionDescStyle}>
                {option.label.split('\n')[1]}
              </Typography>
            </Box>
          )
        }))}
        variant="card"
      />

      <Box className={classes.buttonContainer}>
        <Button variant="secondary" size="medium" onClick={onPrev}>
          <ArrowLeft sx={{ mr: 2, width: 16, height: 16 }} />
          Back
        </Button>
        <Button 
          variant="primary"
          size="medium"
          onClick={onNext} 
          disabled={!canProceed}
        >
          Set Up My System
          <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default InventoryTrackingStep;
