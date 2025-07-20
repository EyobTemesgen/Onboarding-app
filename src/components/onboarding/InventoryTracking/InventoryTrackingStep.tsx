import { RadioGroup } from "@/components/ui/radio-group.tsx";
import { Typography, Box } from "@mui/material";
import { useInventoryTrackingStyles } from "./styled";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { optionTitleStyle, optionDescStyle } from '../OnboardingFlow/styled';
import { InventoryTrackingOption } from "./types";

const INVENTORY_TRACKING_OPTIONS: InventoryTrackingOption[] = [
  { value: "none", title: "We don't track inventory yet", description: "Perfect. We'll build your system from the ground up." },
  { value: "spreadsheets", title: "Spreadsheets", description: "Time to eliminate manual errors and save hours each week." },
  { value: "quickbooks", title: "QuickBooks", description: "Excellent. We'll sync seamlessly with your existing setup." },
  { value: "other_tool", title: "Another inventory tool", description: "We'll help you migrate and upgrade your workflow." },
  { value: "fishbowl", title: "Fishbowl Classic or other ERP", description: "Ready to modernize? We specialize in smooth transitions." }
];

export default {
  title: "How do you track inventory now?",
  subtitle: "Don't worry—we'll work with what you have and eliminate the pain points.",
  topContent: undefined,
  hideBack: false,
  hideNext: false,
  hideComplete: true,
  nextLabel: "Set Up My System",
  completeLabel: undefined,
  getDisableNext: (onboardingData) => !onboardingData.inventoryTracking,
  getDisableComplete: undefined,
  Content: ({ onboardingData, setOnboardingData }) => {
    const classes = useInventoryTrackingStyles();
    const handleSelect = (_: React.ChangeEvent<HTMLInputElement>, value: string) => {
      setOnboardingData(prev => ({ ...prev, inventoryTracking: value }));
    };
    return (
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
    );
  }
};
