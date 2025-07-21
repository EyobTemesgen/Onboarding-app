import * as React from "react";
import { Lan, Autorenew, Settings } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Button } from "@/components/ui/button";
import { useWelcomeStyles } from "./styled";
import OnboardingStepLayout from '../OnboardingFlow/OnboardingStepLayout';

const WELCOME_FEATURES = [
  {
    icon: <Lan />,
    title: "Multi-Channel Control",
    description: "Sync inventory across all your sales channels automatically",
    iconBackgroundColor: "#d1fae5",
    iconColor: "#059669",
  },
  {
    icon: <Autorenew />,
    title: "Real-Time Sync",
    description: "Never oversell again with instant inventory updates",
    iconBackgroundColor: "#e0f2fe",
    iconColor: "#0284c7",
  },
  {
    icon: <Settings />,
    title: "Workflow Automation",
    description: "Streamline operations from order to fulfillment",
    iconBackgroundColor: "#f3e8ff",
    iconColor: "#7c3aed",
  },
];

type StepProps = { setCurrentStep: (fn: any) => void };

export default function Welcome({ setCurrentStep }: StepProps) {
  const classes = useWelcomeStyles();
  return (
    <OnboardingStepLayout
      title="Welcome to Fishbowl Drive – Smarter Inventory Starts Here"
      subtitle="Get multi-channel control, real-time sync, and workflow automation up and running in minutes. Your growing business deserves modern inventory management."
      hideBack
      hideNext
      hideComplete
      topContent={
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Box component="img" src="/images/BOLogoNoText.png" alt="Drive Logo" sx={{ maxWidth: 60, mb: 0}} />
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
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
