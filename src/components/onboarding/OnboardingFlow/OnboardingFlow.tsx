
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { useOnboardingFlowStyles } from "./styled";
import { Box, Typography, LinearProgress } from "@mui/material";

// Step components
import WelcomeStep from "../Welcome/WelcomeStep";
import SalesChannelStep from "../Saleschannels/SalesChannelStep";
import InventoryTrackingStep from "../InventoryTracking/InventoryTrackingStep";
import ShippingLocationStep from "../Shipping/ShippingLocationStep";
import QuickBooksStep from "../Quickbooks/QuickBooksStep";
import ProductImportStep from "../ProductImport/ProductImportStep";
import OnboardingComplete from "../Finish/OnboardingComplete";

const steps = [
  WelcomeStep,
  SalesChannelStep,
  InventoryTrackingStep,
  ShippingLocationStep,
  QuickBooksStep,
  ProductImportStep,
  OnboardingComplete,
];

const TOTAL_STEPS = steps.length - 1;

const OnboardingFlow = () => {
  // Routing and onboarding state
  const [searchParams, setSearchParams] = useSearchParams();
  const stepParam = Number(searchParams.get("step")) || 0;
  const { currentStep, setCurrentStep, onboardingData, setOnboardingData } = useOnboarding();
  const classes = useOnboardingFlowStyles();

  // Sync step from URL on mount
  useEffect(() => {
    setCurrentStep(stepParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update URL when step changes
  useEffect(() => {
    setSearchParams({ step: String(currentStep) });
  }, [currentStep, setSearchParams]);

  // Progress calculation
  const progress = (currentStep / TOTAL_STEPS) * 100;
  const StepComponent = steps[currentStep] || steps[0];

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.contentWrapper}>
        {/* Progress Bar */}
        {currentStep > 0 && currentStep <= TOTAL_STEPS && (
          <Box className={classes.progressContainer}>
            <Box className={classes.progressHeader}>
              <Typography className={classes.stepText}>
                Step {currentStep} of {TOTAL_STEPS}
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

        {/* Current Step */}
        <StepComponent
          onboardingData={onboardingData}
          setOnboardingData={setOnboardingData}
          setCurrentStep={setCurrentStep}
        />
      </Box>
    </Box>
  );
};

export default OnboardingFlow;
