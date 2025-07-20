import { RadioGroup } from "@/components/ui/radio-group.tsx";
import { Typography, Box } from "@mui/material";
import { useInventoryTrackingStyles } from "./styled";
import OnboardingStepLayout from '../OnboardingFlow/OnboardingStepLayout';

const INVENTORY_TRACKING_OPTIONS = [
  { value: "none", title: "We don't track inventory yet", description: "Perfect. We'll build your system from the ground up." },
  { value: "spreadsheets", title: "Spreadsheets", description: "Time to eliminate manual errors and save hours each week." },
  { value: "quickbooks", title: "QuickBooks", description: "Excellent. We'll sync seamlessly with your existing setup." },
  { value: "other_tool", title: "Another inventory tool", description: "We'll help you migrate and upgrade your workflow." },
  { value: "fishbowl", title: "Fishbowl Classic or other ERP", description: "Ready to modernize? We specialize in smooth transitions." }
];

type StepProps = {
  onboardingData: any;
  setOnboardingData: (fn: any) => void;
  setCurrentStep: (fn: any) => void;
};

export default function InventoryTrackingStep({ onboardingData, setOnboardingData, setCurrentStep }: StepProps) {
  const classes = useInventoryTrackingStyles();
  const handleSelect = (_event, value) => {
    setOnboardingData(prev => ({ ...prev, inventoryTracking: value }));
  };
  const canProceed = !!onboardingData.inventoryTracking;
  return (
    <OnboardingStepLayout
      title="How do you track inventory now?"
      subtitle="Don't worry—we'll work with what you have and eliminate the pain points."
      onNext={() => setCurrentStep((step) => step + 1)}
      onBack={() => setCurrentStep((step) => step - 1)}
      disableNext={!canProceed}
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
              <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '15px', lineHeight: '20px' }}>{title}</Typography>
              <Typography sx={{ color: '#64748b', fontSize: '13px', lineHeight: '18px', fontWeight: 400 }}>{description}</Typography>
            </Box>
          )
        }))}
      />
    </OnboardingStepLayout>
  );
}
