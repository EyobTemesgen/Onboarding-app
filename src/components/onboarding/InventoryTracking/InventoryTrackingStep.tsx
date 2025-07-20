import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group.tsx";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { useInventoryTrackingStyles } from "./styled";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { optionTitleStyle, optionDescStyle } from '@/theme/globalStyles';
import { InventoryTrackingOption } from "./types";

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
    <Box className={classes.container}>
      <Box className={classes.headerSection}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 'bold',
            color: '#0f172a',
            fontSize: 24,
            lineHeight: '32px'
          }}
        >
          How do you track inventory now?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#475569',
            fontSize: 16,
            lineHeight: '24px'
          }}
        >
          Don't worry—we'll work with what you have and eliminate the pain points.
        </Typography>
      </Box>

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

      <Box className={classes.buttonContainer}>
        <Button variant="secondary" size="medium" onClick={onPrev}>
          <ArrowLeft sx={{ mr: 2, width: 16, height: 16 }} />
          Back
        </Button>
        <Button
          variant="primary"
          size="medium"
          onClick={onNext}
          disabled={!onboardingData.inventoryTracking}
        >
          Set Up My System
          <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default InventoryTrackingStep;
