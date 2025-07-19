
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group.tsx";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft, Home, Business as Building2, LocalShipping as Truck, Schedule as Clock } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { StepProps } from "../types";
import { useShippingStyles } from "./styled";
import { SHIPPING_LOCATION_OPTIONS } from "./const.tsx";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { optionTitleStyle, optionDescStyle } from '../shared/optionStyles';

const ShippingLocationStep = () => {
  const { onboardingData, setOnboardingData, currentStep, setCurrentStep } = useOnboarding();
  const classes = useShippingStyles();

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setOnboardingData(prev => ({ ...prev, shippingLocation: value }));
  };

  const canProceed = onboardingData.shippingLocation !== "";

  const onNext = () => setCurrentStep(currentStep + 1);
  const onPrev = () => setCurrentStep(currentStep - 1);

  return (
    <Box className={classes.container}>
      <Box className={classes.headerSection}>
        <Typography 
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 600,
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
        value={onboardingData.shippingLocation}
        onChange={handleSelect}
        options={SHIPPING_LOCATION_OPTIONS}
        variant="card"
      >
        {SHIPPING_LOCATION_OPTIONS.map((option) => (
          <Box key={option.value} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <input
              type="radio"
              value={option.value}
              checked={onboardingData.shippingLocation === option.value}
              onChange={(e) => handleSelect(e, option.value)}
              id={`shipping-location-${option.value}`}
              className="radio-input"
            />
            <label htmlFor={`shipping-location-${option.value}`} className="radio-label">
              <Typography sx={optionTitleStyle}>{option.label}</Typography>
              <Typography sx={optionDescStyle}>{option.description}</Typography>
            </label>
          </Box>
        ))}
      </RadioGroup>

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
          Continue
          <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default ShippingLocationStep;
