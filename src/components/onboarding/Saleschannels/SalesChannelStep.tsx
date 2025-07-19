
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { StepProps } from "../types";
import { useSaleschannelsStyles } from "./styled";
import { SALES_CHANNEL_OPTIONS } from "./const";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { optionTitleStyle, optionDescStyle } from '@/theme/globalStyles';

const SalesChannelStep = () => {
  const { onboardingData, setOnboardingData, currentStep, setCurrentStep } = useOnboarding();
  const classes = useSaleschannelsStyles();

  const handleToggle = (optionId: string) => {
    const currentChannels = onboardingData.salesChannels;
    const newChannels = currentChannels.includes(optionId)
      ? currentChannels.filter(id => id !== optionId)
      : [...currentChannels, optionId];
    setOnboardingData(prev => ({ ...prev, salesChannels: newChannels }));
  };

  const canProceed = onboardingData.salesChannels.length > 0;

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
          Where do you sell today?
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#475569', 
            fontSize: '16px',
            lineHeight: '24px'
          }}
        >
          Select all that apply. We'll configure the right integrations to centralize your operations.
        </Typography>
      </Box>

      <Box className={classes.optionsContainer}>
        {SALES_CHANNEL_OPTIONS.map((option) => (
          <Box
            key={option.id}
            className={`${classes.optionCard} ${onboardingData.salesChannels.includes(option.id) ? classes.optionCardSelected : ''}`}
            onClick={() => handleToggle(option.id)}
          >
            <Box className={classes.optionContent}>
              <Checkbox
                checked={onboardingData.salesChannels.includes(option.id)}
                onChange={() => {}}
                sx={{ mt: 0.5 }}
              />
              <Box className={classes.optionText}>
                <Typography sx={optionTitleStyle}>
                  {option.label}
                </Typography>
                <Typography sx={optionDescStyle}>
                  {option.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

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
          Next
          <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default SalesChannelStep;
