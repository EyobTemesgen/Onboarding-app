
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { useOnboardingFlowStyles, cardStyle, optionTitleStyle, optionDescStyle, stepTitleStyle, stepSubtitleStyle } from "./styled";
import { Box, Typography } from "@mui/material";

import { LinearProgress } from "@mui/material";
import ProductImportStep from "../ProductImport/ProductImportStep";
import InventoryTrackingStep from "../InventoryTracking/InventoryTrackingStep";
import QuickBooksStep from "../Quickbooks/QuickBooksStep";
import SalesChannelStep from "../Saleschannels/SalesChannelStep";
import ShippingLocationStep from "../Shipping/ShippingLocationStep";
import OnboardingComplete from "../Finish/OnboardingComplete";
import WelcomeStep from "../Welcome/WelcomeStep";
import { Card } from '@/components/ui/card';
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button } from '@/components/ui/button';

const OnboardingFlow = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stepParam = Number(searchParams.get("step")) || 0;
  const { currentStep, setCurrentStep, onboardingData, setOnboardingData } = useOnboarding();
  const classes = useOnboardingFlowStyles();

  useEffect(() => {
    setCurrentStep(stepParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSearchParams({ step: String(currentStep) });
  }, [currentStep, setSearchParams]);

  const totalSteps = 6;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    WelcomeStep,
    SalesChannelStep,
    InventoryTrackingStep,
    ShippingLocationStep,
    QuickBooksStep,
    ProductImportStep,
    OnboardingComplete,
  ];
  const step = steps[currentStep] || steps[0];

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.contentWrapper}>
        {currentStep > 0 && currentStep <= totalSteps - 1 && (
          <Box className={classes.progressContainer}>
            <Box className={classes.progressHeader}>
              <Typography className={classes.stepText}>
                Step {currentStep} of {totalSteps - 1}
              </Typography>
              <Typography className={classes.progressText}>{Math.round(progress)}% complete</Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: '6px',
                borderRadius: 1,
                backgroundColor: (theme) => theme.palette.action.hover,
                '& .MuiLinearProgress-bar': {
                  borderRadius: 1,
                },
              }}
            />
          </Box>
        )}
        
        <Card sx={cardStyle}>
          {step.topContent && <Box sx={{ mb: 1 }}>{step.topContent}</Box>}
          <Box sx={{ textAlign: 'center', mb: 1.5 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={stepTitleStyle}
            >
              {step.title}
            </Typography>
            {step.subtitle && (
              <Typography
                variant="body1"
                sx={stepSubtitleStyle}
              >
                {step.subtitle}
              </Typography>
            )}
          </Box>
          <Box sx={{ flex: 1, width: '100%', mb: 1 }}>
            {step.Content && (
              <step.Content onboardingData={onboardingData} setOnboardingData={setOnboardingData} setCurrentStep={setCurrentStep} />
            )}
          </Box>
          {!(step.hideBack && step.hideNext && step.hideComplete) && (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2, width: '100%' }}>
              <Box>
                {!step.hideBack && currentStep > 0 && (
                  <Button variant="secondary" size="medium" onClick={prevStep}>
                    <ArrowBack sx={{ mr: 1, fontSize: 18 }} />
                    Back
                  </Button>
                )}
              </Box>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {!step.hideNext && currentStep < steps.length - 1 && (
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={nextStep}
                    disabled={step.getDisableNext ? step.getDisableNext(onboardingData) : false}
                  >
                    {step.nextLabel || 'Next'}
                    <ArrowForward sx={{ ml: 1, fontSize: 18 }} />
                  </Button>
                )}
                {!step.hideComplete && currentStep < steps.length - 1 && (
                  <Button
                    variant="primary"
                    size="medium"
                    onClick={nextStep}
                    disabled={step.getDisableComplete ? step.getDisableComplete(onboardingData) : false}
                  >
                    {step.completeLabel || 'Complete Setup'}
                    <ArrowForward sx={{ ml: 1, fontSize: 18 }} />
                  </Button>
                )}
              </Box>
            </Box>
          )}
        </Card>
      </Box>
    </Box>
  );
};

export default OnboardingFlow;
