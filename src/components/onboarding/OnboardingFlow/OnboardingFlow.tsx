
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import WelcomeStep from "../Start/WelcomeStep";
import ProductImportStep from "../ProductImport/ProductImportStep";
import InventoryTrackingStep from "../InventoryTracking/InventoryTrackingStep";
import QuickBooksStep from "../Quickbooks/QuickBooksStep";
import SalesChannelStep from "../Saleschannels/SalesChannelStep";
import ShippingLocationStep from "../Shipping/ShippingLocationStep";
import OnboardingComplete from "../Finish/OnboardingComplete";
import { OnboardingData } from "../types";
import { useOnboardingFlowStyles } from "./styled";

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    salesChannels: [],
    inventoryTracking: "",
    shippingLocation: "",
    quickBooks: "",
    productImport: "",
  });
  const classes = useOnboardingFlowStyles();

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

  const updateData = (key: keyof OnboardingData, value: any) => {
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
        return (
          <SalesChannelStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 2:
        return (
          <InventoryTrackingStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 3:
        return (
          <ShippingLocationStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 4:
        return (
          <QuickBooksStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <ProductImportStep
            data={onboardingData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
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
            <Progress value={progress} sx={{ height: '8px' }} />
          </Box>
        )}
        
        <Card className={classes.styledCard}>
          {renderStep()}
        </Card>
      </Box>
    </Box>
  );
};

export default OnboardingFlow;
