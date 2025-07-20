import * as React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowForward as ArrowRight, 
  Hub, 
  Sync, 
  AutoMode 
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useWelcomeStyles } from "./styled";
import { useOnboarding } from "@/contexts/OnboardingContext";

const WELCOME_FEATURES = [
  {
    icon: <Hub />,
    title: "Multi-Channel Control",
    description: "Sync inventory across all your sales channels automatically",
    iconBackgroundColor: "#d1fae5",
    iconColor: "#059669",
  },
  {
    icon: <Sync />,
    title: "Real-Time Sync",
    description: "Never oversell again with instant inventory updates",
    iconBackgroundColor: "#e0f2fe",
    iconColor: "#0284c7",
  },
  {
    icon: <AutoMode />,
    title: "Workflow Automation",
    description: "Streamline operations from order to fulfillment",
    iconBackgroundColor: "#f3e8ff",
    iconColor: "#7c3aed",
  },
];

const WelcomeStep = () => {
  const classes = useWelcomeStyles();
  const { setCurrentStep } = useOnboarding();

  return (
    <Box className={classes.page}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <img src="/images/BOLogoNoText.png" alt="Drive Logo" style={{ maxWidth: 60 }} />

        <Typography 
          variant="h2"
          component="h1"
          sx={{ 
            fontWeight: 800,
            fontSize: '23px',
            lineHeight: '36px',
            color: '#1e293b',
            textAlign: 'center'
          }}
        >
          Welcome to Fishbowl Drive – Smarter Inventory Starts Here
        </Typography>

        <Typography 
          variant="h6"
          sx={{ 
            fontSize: '16px',
            lineHeight: '24px',
            color: '#475569',
            maxWidth: 448,
            textAlign: 'center'
          }}
        >
          Get multi-channel control, real-time sync, and workflow automation 
          up and running in minutes. Your growing business deserves modern inventory management.
        </Typography>
      </Box>

      {/* Features Grid */}
      <Box className={classes.highlights}>
        {WELCOME_FEATURES.map(({ icon, title, description, iconBackgroundColor, iconColor }, index) => (
          <Box key={index} className={classes.highlightCard}>
            <Box 
              className={classes.highlightIcon}
              sx={{ backgroundColor: iconBackgroundColor }}
            >
              {React.cloneElement(icon as React.ReactElement, { sx: { color: iconColor } })}
            </Box>

            <Typography 
              variant="h6"
              component="h3"
              sx={{ fontWeight: 600, color: '#0f172a', fontSize: 16, lineHeight: '24px' }}
            >
              {title}
            </Typography>

            <Typography 
              variant="body2"
              sx={{ 
                fontSize: 14, 
                lineHeight: '20px', 
                color: '#475569', 
                textAlign: 'center',
                maxWidth: 240,
                mx: 'auto'
              }}
            >
              {description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CTA Section */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: -1 }}>
        <Button
          variant="primary"
          size="large"
          onClick={() => setCurrentStep(1)}
          twClassName="w-full"
        >
          Let’s Go
          <ArrowRight sx={{ ml: 2, width: 20, height: 20 }} />
        </Button>

        <Typography 
          variant="body2"
          sx={{ 
            color: '#64748b',
            fontSize: 14,
            lineHeight: '20px',
            textAlign: 'center'
          }}
        >
          Takes 3 minutes • Set up your first win fast
        </Typography>
      </Box>
    </Box>
  );
};

export default WelcomeStep;
