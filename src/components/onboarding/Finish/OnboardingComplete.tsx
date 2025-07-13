import { CheckCircle, ArrowRight, CenterFocusStrong, FlashOn, Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Card } from "@/components/ui/card/card";
import { Button } from "@/components/ui/button";
import { useFinishStyles } from "./styled";

const features = [
  {
    icon: <CenterFocusStrong />, bgcolor: "#dbeafe", iconcolor: "#2563eb", title: "Centralized Control", desc: "All channels, one dashboard"
  },
  {
    icon: <FlashOn />, bgcolor: "#dcfce7", iconcolor: "#16a34a", title: "Real-Time Sync", desc: "Instant updates across platforms"
  },
  {
    icon: <Star />, bgcolor: "#f3e8ff", iconcolor: "#9333ea", title: "Expert Support", desc: "We're here when you need us"
  }
];

const steps = [
  { title: "Connect your sales channels", description: "Integrate Shopify, Amazon, and more." },
  { title: "Import your products", description: "Bring in your catalog from any source." },
  { title: "Set up inventory locations", description: "Configure warehouses, stores, and more." },
  { title: "Invite your team", description: "Collaborate and assign roles." },
];

const OnboardingComplete = () => {
  const classes = useFinishStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.section}>
        <Box className={classes.iconCircle}>
          <CheckCircle sx={{ width: 40, height: 40, color: 'white' }} />
        </Box>
        <Typography className={classes.title}>Onboarding Complete!</Typography>
        <Typography className={classes.subtitle}>Your Drive control center is ready. You can now manage inventory, orders, and channels from one place.</Typography>
      </Box>

      <Card className={classes.styledCard}>
        <Typography className={classes.cardTitle}>Your personalized control center is ready</Typography>
        <Box className={classes.featureGrid}>
          {features.map((f, i) => (
            <Box key={i} className={classes.featureCard}>
              <Box 
                className={classes.featureIcon}
                sx={{ backgroundColor: f.bgcolor }}
              >
                <Box sx={{ color: f.iconcolor }}>{f.icon}</Box>
              </Box>
              <Typography className={classes.featureTitle}>{f.title}</Typography>
              <Typography className={classes.featureDesc}>{f.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Card>

      <Box className={classes.stepsSection}>
        <Typography className={classes.stepsTitle}>Your next steps:</Typography>
        <Box className={classes.stepsList}>
          {steps.map((step, index) => (
            <Box key={index} className={classes.stepItem}>
              <Box className={classes.stepIcon}>{index + 1}</Box>
              <div>
                <Typography className={classes.stepTitle}>{step.title}</Typography>
                <Typography className={classes.stepDesc}>{step.description}</Typography>
              </div>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={classes.buttonSection}>
        <Button className={classes.finishButton}>
          Go to Dashboard
          <ArrowRight sx={{ ml: 2, width: 20, height: 20 }} />
        </Button>
        <Typography className={classes.helperText}>Need help? Our support team is always here for you.</Typography>
      </Box>
    </Box>
  );
};

export default OnboardingComplete;
