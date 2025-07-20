
import { Checkbox } from "@/components/ui/checkbox";
import { Typography, Box } from "@mui/material";
import { useSaleschannelsStyles } from "./styled";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { optionTitleStyle, optionDescStyle } from '@/theme/globalStyles';

interface SalesChannelOption {
  id: string;
  label: string;
  description: string;
}

const SALES_CHANNEL_OPTIONS: SalesChannelOption[] = [
  { 
    id: "ecommerce", 
    label: "Shopify or other ecommerce site", 
    description: "We'll sync your online store automatically" 
  },
  { 
    id: "marketplaces", 
    label: "Amazon, Walmart, or other marketplaces", 
    description: "Connect and control pricing across platforms" 
  },
  { 
    id: "b2b", 
    label: "B2B (email, phone, portal orders)", 
    description: "Streamline wholesale and direct sales" 
  },
  { 
    id: "manual", 
    label: "Manual orders (trade shows, spreadsheets)", 
    description: "Digitize and automate your current process" 
  },
  { 
    id: "retail", 
    label: "Retail or POS", 
    description: "Sync in-store and online inventory" 
  },
  { 
    id: "not_selling", 
    label: "Not selling yet", 
    description: "We'll prepare you for launch day" 
  },
];

export default {
  title: "Where do you sell today?",
  subtitle: "Select all that apply. We'll configure the right integrations to centralize your operations.",
  topContent: undefined,
  hideBack: false,
  hideNext: false,
  hideComplete: true,
  nextLabel: "Next",
  completeLabel: undefined,
  getDisableNext: (onboardingData) => !(onboardingData.salesChannels && onboardingData.salesChannels.length > 0),
  getDisableComplete: undefined,
  Content: ({ onboardingData, setOnboardingData }) => {
    const classes = useSaleschannelsStyles();
    const handleToggle = (optionId) => {
      const currentChannels = onboardingData.salesChannels;
      const newChannels = currentChannels.includes(optionId)
        ? currentChannels.filter(id => id !== optionId)
        : [...currentChannels, optionId];
      setOnboardingData(prev => ({ ...prev, salesChannels: newChannels }));
    };
    return (
      <Box className={classes.optionsContainer}>
        {SALES_CHANNEL_OPTIONS.map((option) => (
          <Box
            key={option.id}
            className={`${classes.optionCard} ${onboardingData.salesChannels.includes(option.id) ? classes.optionCardSelected : ''}`}
            onClick={() => handleToggle(option.id)}
          >
            <Box className={classes.optionContent}>
              <Box sx={{ mt: 0.5 }}>
                <Checkbox
                  checked={onboardingData.salesChannels.includes(option.id)}
                  onChange={() => {}}
                />
              </Box>
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
    );
  }
};
