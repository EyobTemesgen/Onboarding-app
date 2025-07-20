import { RadioGroup } from "@/components/ui/radio-group.tsx";
import { Typography, Box } from "@mui/material";
import { useInventoryTrackingStyles } from "./styled";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { optionTitleStyle, optionDescStyle } from '@/theme/globalStyles';
import { InventoryTrackingOption } from "./types";
import OnboardingStepLayout from '../OnboardingStepLayout';

const INVENTORY_TRACKING_OPTIONS: InventoryTrackingOption[] = [
  { value: "none", title: "We don't track inventory yet", description: "Perfect. We'll build your system from the ground up." },
  { value: "spreadsheets", title: "Spreadsheets", description: "Time to eliminate manual errors and save hours each week." },
  { value: "quickbooks", title: "QuickBooks", description: "Excellent. We'll sync seamlessly with your existing setup." },
  { value: "other_tool", title: "Another inventory tool", description: "We'll help you migrate and upgrade your workflow." },
  { value: "fishbowl", title: "Fishbowl Classic or other ERP", description: "Ready to modernize? We specialize in smooth transitions." }
];

const InventoryTrackingStep = () => {
  const { onboardingData, setOnboardingData, currentStep, setCurrentStep } = useOnboarding();
  const classes = useInventoryTrackingStyles();

  const handleSelect = (_: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setOnboardingData(prev => ({ ...prev, inventoryTracking: value }));
  };

  const onNext = () => setCurrentStep(currentStep + 1);
  const onPrev = () => setCurrentStep(currentStep - 1);

  return (
    <OnboardingStepLayout
      title="How do you track inventory now?"
      subtitle="Don't worry—we'll work with what you have and eliminate the pain points."
      onBack={onPrev}
      onNext={onNext}
      disableNext={!onboardingData.inventoryTracking}
      nextLabel="Set Up My System"
      hideComplete
    >
      <RadioGroup
        value={onboardingData.inventoryTracking}
        onChange={handleSelect}
        variant="card"
        options={INVENTORY_TRACKING_OPTIONS.map(({ value, title, description }) => ({
          value,
          label: (
            <Box>
              <Typography sx={optionTitleStyle}>{title}</Typography>
              <Typography sx={optionDescStyle}>{description}</Typography>
            </Box>
          )
        }))}
      />
    </OnboardingStepLayout>
  );
};

export default InventoryTrackingStep;
