import * as React from "react";
import { Hub, Sync, AutoMode } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { useWelcomeStyles } from "./styled";
import OnboardingStepLayout from '../OnboardingFlow/OnboardingStepLayout';

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

type StepProps = {
  onboardingData: any;
  setOnboardingData: (fn: any) => void;
  setCurrentStep: (fn: any) => void;
};

export default function WelcomeStep({ onboardingData, setOnboardingData, setCurrentStep }: StepProps) {
  const classes = useWelcomeStyles();
  return (
    <OnboardingStepLayout
      title="Welcome to Fishbowl Drive – Smarter Inventory Starts Here"
      subtitle="Get multi-channel control, real-time sync, and workflow automation up and running in minutes. Your growing business deserves modern inventory management."
      hideBack
      hideNext
      hideComplete
      topContent={
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 2 }}>
          <img src="/images/BOLogoNoText.png" alt="Drive Logo" style={{ maxWidth: 60, marginBottom: 16 }} />
        </Box>
      }
    >
      <Box className={classes.highlights}>
        {WELCOME_FEATURES.map(({ icon, title, description, iconBackgroundColor, iconColor }, index) => (
          <Box key={index} className={classes.highlightCard}>
            <Box
              className={classes.highlightIcon}
              sx={{ backgroundColor: iconBackgroundColor }}
            >
              {React.cloneElement(icon, { sx: { color: iconColor } })}
            </Box>
            <Typography
              variant="h6"
              component="h3"
              sx={{ fontWeight: 600, color: "#0f172a", fontSize: 16, lineHeight: "24px" }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: 14,
                lineHeight: "20px",
                color: "#475569",
                textAlign: "center",
                maxWidth: 240,
                mx: "auto",
              }}
            >
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Button
          variant="primary"
          size="large"
          onClick={() => setCurrentStep(1)}
         twClassName="w-full"
        >
          Let’s Go
        </Button>
        <Typography
          variant="body2"
          sx={{
            color: "#64748b",
            fontSize: 14,
            lineHeight: "20px",
            textAlign: "center",
          }}
        >
          Takes 3 minutes • Set up your first win fast
        </Typography>
      </Box>
    </OnboardingStepLayout>
  );
}
