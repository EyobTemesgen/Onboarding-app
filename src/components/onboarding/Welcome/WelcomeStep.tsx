
import * as React from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowForward as ArrowRight, 
  Inventory as Package
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { WelcomeStepProps } from "../types";
import { useWelcomeStyles } from "./styled";
import { WELCOME_FEATURES } from "./const.tsx";

const WelcomeStep = () => {
  const classes = useWelcomeStyles();

  return (
    <Box className={classes.container}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Box className={classes.iconContainer}>
          <Package sx={{ width: 32, height: 32, color: 'white' }} />
        </Box>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#0f172a',
            fontSize: '26px', 
            lineHeight: '32px' 
          }}
        >
          Welcome to Drive – Smarter Inventory Starts Here
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#475569', 
            maxWidth: '448px', 
            mx: 'auto',
            fontSize: '16px', 
            lineHeight: '24px'
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
                lineHeight: '20px'
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
          onClick={() => {}}
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
