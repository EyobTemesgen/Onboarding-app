import { CheckCircle, ArrowRight, CenterFocusStrong, FlashOn, Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useFinishStyles } from "./styled";
import { features, steps } from "./const";
import OnboardingStepLayout from '../OnboardingFlow/OnboardingStepLayout';

type StepProps = {
  onboardingData: any;
  setOnboardingData: (fn: any) => void;
  setCurrentStep: (fn: any) => void;
};

const iconMap = {
  CenterFocusStrong: <CenterFocusStrong />,
  FlashOn: <FlashOn />,
  Star: <Star />,
};

export default function OnboardingComplete({ onboardingData, setOnboardingData, setCurrentStep }: StepProps) {
  const classes = useFinishStyles();
  return (
    <OnboardingStepLayout
      title={"That's it! You're ready to Drive."}
      subtitle={"Your Drive setup is configured for B2B workflow automation and multi-warehouse management. Time to take control."}
      hideBack
      hideNext
      hideComplete
      topContent={
        <Box className={classes.section} sx={{ alignItems: 'center' }}>
          <Box className={classes.iconCircle}>
            <CheckCircle sx={{ width: 40, height: 40, color: 'white' }} />
          </Box>
        </Box>
      }
    >
      <Card className={classes.styledCard} sx={{ borderRadius: 1, border: `1px solid #bfdbfe`, backgroundColor: '#f8fbff', color: theme => theme.palette.text.primary, boxShadow: theme => theme.shadows[1] }}>
        <Typography className={classes.cardTitle}>Your personalized control center is ready</Typography>
        <Box className={classes.featureGrid}>
          {features.map((f, i) => (
            <Box key={i} className={classes.featureCard}>
              <Box className={classes.featureIcon} sx={{ backgroundColor: f.bgcolor }}>
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
        <button className={classes.finishButton}>
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            Start Your Free Trial
          </span>
          <ArrowRight sx={{ fontSize: 24, verticalAlign: 'middle' }} />
        </button>
        <Typography className={classes.helperText}>14-day free trial • Full access • Get your first win today</Typography>
      </Box>
    </OnboardingStepLayout>
  );
}
