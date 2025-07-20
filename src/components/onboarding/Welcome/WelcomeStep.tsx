
import * as React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowForward as ArrowRight, 
  Inventory as Package,
  Hub, Sync, AutoMode
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useWelcomeStyles } from "./styled";
import { useOnboarding } from "@/contexts/OnboardingContext";

interface WelcomeFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBackgroundColor: string;
  iconColor: string;
}

const WELCOME_FEATURES: WelcomeFeature[] = [
  {
    icon: <Hub />,
    title: "Multi-Channel Control",
    description: "Sync inventory across all your sales channels automatically",
    iconBackgroundColor: "#d1fae5",
    iconColor: "#059669"
  },
  {
    icon: <Sync />,
    title: "Real-Time Sync",
    description: "Never oversell again with instant inventory updates",
    iconBackgroundColor: "#e0f2fe",
    iconColor: "#0284c7"
  },
  {
    icon: <AutoMode />,
    title: "Workflow Automation",
    description: "Streamline operations from order to fulfillment",
    iconBackgroundColor: "#f3e8ff",
    iconColor: "#7c3aed"
  }
];

const WelcomeStep = () => {
  const classes = useWelcomeStyles();
  const { setCurrentStep } = useOnboarding();

  return (
    <Box className={classes.container}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
        <img 
          src="/images/BOLogoNoText.png" 
          alt="Drive Logo" 
          style={{ maxWidth: 60}} 
        />
        <Typography 
          variant="h2" 
          component="h1" 
          sx={{ 
            color: '#1e293b',
            fontWeight: 800,
            fontSize: '23px',
            lineHeight: '36px',
            letterSpacing: 0,
          }}
        >
          Welcome to Fishbowl Drive – Smarter Inventory Starts Here
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#475569', 
            maxWidth: '448px', 
            mx: 'auto',
            fontSize: '16px', 
            lineHeight: '24px',
            textAlign: 'center',
          }}
        >
          Get multi-channel control, real-time sync, and workflow automation 
          up and running in minutes. Your growing business deserves modern inventory management.
        </Typography>
      </Box>

            <Box className={classes.featureGrid}>
        {WELCOME_FEATURES.map((feature, index) => (
          <Box key={index} className={classes.featureCard}>
            <Box 
              className={classes.featureIcon}
              sx={{ backgroundColor: feature.iconBackgroundColor }}
            >
              {React.cloneElement(feature.icon as React.ReactElement, { 
                sx: { color: feature.iconColor } 
              })}
            </Box>
            <Typography 
              variant="h6" 
              component="h3" 
              sx={{ 
                fontWeight: 600, 
                color: '#0f172a',
                fontSize: '16px', 
                lineHeight: '24px'
              }}
            >
              {feature.title}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#475569',
                fontSize: '14px', 
                lineHeight: '20px',
                textAlign: index === 0 ? 'justify' : undefined,
                maxWidth: index === 0 ? 220 : undefined,
                mx: index === 0 ? 'auto' : undefined
              }}
            >
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Box>

  
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', mt: '-8px' }}> 
        <Button 
          variant="primary"
          size="large"
          onClick={() => setCurrentStep(1)}
          twClassName="w-full"
        >
          Let's Go
          <ArrowRight sx={{ ml: 2, width: 20, height: 20 }} />
        </Button>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#64748b',   
            fontSize: '14px', 
            lineHeight: '20px'
          }}
        >
          Takes 3 minutes • Set up your first win fast
        </Typography>
      </Box>
    </Box>
  );
};

export default WelcomeStep;
