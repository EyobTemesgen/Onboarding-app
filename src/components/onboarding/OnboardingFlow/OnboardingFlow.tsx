
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { useOnboardingFlowStyles } from "./styled";
import { Box, Typography } from "@mui/material";
import { Card } from "@/components/ui/card";
import { LinearProgress } from "@mui/material";
import ProductImportStep from "../ProductImport/ProductImportStep";
import InventoryTrackingStep from "../InventoryTracking/InventoryTrackingStep";
import QuickBooksStep from "../Quickbooks/QuickBooksStep";
import SalesChannelStep from "../Saleschannels/SalesChannelStep";
import ShippingLocationStep from "../Shipping/ShippingLocationStep";
import OnboardingComplete from "../Finish/OnboardingComplete";
import { OnboardingData } from "../types";
import WelcomeStep from "../Welcome/WelcomeStep";

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

  const updateData = (key: keyof typeof onboardingData, value: unknown) => {
    setOnboardingData(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeStep onNext={nextStep} />;
      case 1:
        return <SalesChannelStep />;
      case 2:
        return <InventoryTrackingStep />;
      case 3:
        return <ShippingLocationStep />;
      case 4:
        return <QuickBooksStep />;
      case 5:
        return <ProductImportStep />;
      case 6:
        return <OnboardingComplete />;
      default:
        return <WelcomeStep onNext={nextStep} />;
    }
  };

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
        
        <Card
          className={classes.styledCard}
          sx={{
            borderRadius: 1,
            border: `1px solid ${theme => theme.palette.divider}`,
            backgroundColor: theme => theme.palette.background.paper,
            color: theme => theme.palette.text.primary,
            boxShadow: theme => theme.shadows[1],
          }}
        >
          {renderStep()}
        </Card>
      </Box>
    </Box>
  );
};

export default OnboardingFlow;
