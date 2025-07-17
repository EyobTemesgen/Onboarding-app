import { CheckCircle, ArrowRight, CenterFocusStrong, FlashOn, Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFinishStyles } from "./styled";
import { features, steps } from "./const";

const iconMap = {
  CenterFocusStrong: <CenterFocusStrong />,
  FlashOn: <FlashOn />,
  Star: <Star />,
};

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

      <Card
        className={classes.styledCard}
        sx={{
          borderRadius: 1,
          border: `1px solid ${theme => theme.palette.divider}`,
          backgroundColor: theme => theme.palette.background.paper,
          color: theme => theme.palette.text.primary,
          boxShadow: theme => theme.shadows[1],
        }}
      >
        <Typography className={classes.cardTitle}>Your personalized control center is ready</Typography>
        <Box className={classes.featureGrid}>
          {features.map((f, i) => (
            <Box key={i} className={classes.featureCard}>
              <Box 
                className={classes.featureIcon}
                sx={{ backgroundColor: f.bgcolor }}
              >
                <Box sx={{ color: f.iconcolor }}>{iconMap[f.icon]}</Box>
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
        <Button>
          Go to Dashboard
          <ArrowRight sx={{ ml: 2, width: 20, height: 20 }} />
        </Button>
        <Typography className={classes.helperText}>Need help? Our support team is always here for you.</Typography>
      </Box>
    </Box>
  );
};

export default OnboardingComplete;
