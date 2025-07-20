
import { ArrowBack, ArrowForward, Monitor, Computer, Close, CalendarToday } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { useQuickbooksStyles } from "./styled";
import QuickBooksDesktopDialog from "./QuickBooksDesktopDialog";
import { useState } from "react";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { optionTitleStyle, optionDescStyle, stepTitleStyle } from '@/theme/globalStyles';
import { QuickBooksOption } from "./types";

const QUICKBOOKS_OPTIONS: QuickBooksOption[] = [
  {
    value: "online",
    label: "Yes: QuickBooks Online",
    description: "Excellent. We'll sync seamlessly with real-time financial data.",
    icon: <Monitor />,
    badge: "Most Popular",
    iconColor: "#22c55e",
    highlight: true,
  },
  {
    value: "desktop",
    label: "Yes: QuickBooks Desktop",
    description: "Desktop requires our Advanced enterprise solution for full integration.",
    icon: <Computer />,
    iconColor: "#f59e42",
  },
  {
    value: "none",
    label: "No accounting software yet",
    description: "Perfect. We'll show you our built-in financial reporting features.",
    icon: <Close />,
    iconColor: "#60a5fa",
  },
  {
    value: "planning",
    label: "Planning to use QuickBooks",
    description: "Smart choice. We'll set up the integration when you're ready.",
    icon: <CalendarToday />,
    iconColor: "#a78bfa",
  },
];

const QuickBooksStep = () => {
  const { onboardingData, setOnboardingData, currentStep, setCurrentStep } = useOnboarding();
  const [showEnterpriseDialog, setShowEnterpriseDialog] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const classes = useQuickbooksStyles();

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    if (value === "desktop") {
      setShowEnterpriseDialog(true);
    } else {
      setOnboardingData(prev => ({ ...prev, quickBooks: value }));
    }
  };

  const handleSendInfo = () => {
    setEmailSent(true);
    setTimeout(() => {
      setShowEnterpriseDialog(false);
      setEmailSent(false);
      setOnboardingData(prev => ({ ...prev, quickBooks: "desktop" }));
    }, 2000);
  };

  const handleNext = () => setCurrentStep(currentStep + 1);
  const handlePrev = () => setCurrentStep(currentStep - 1);

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.headerSection}>
          <Typography 
            variant="h4"
            component="h2"
            sx={stepTitleStyle}
          >
            Do you use QuickBooks for accounting?
          </Typography>
          <Typography 
            variant="body1"
            className={classes.subtitleStyle}
          >
            We'll configure the right financial sync to keep everything connected.
          </Typography>
        </Box>

        <RadioGroup
          value={onboardingData.quickBooks}
          onChange={handleSelect}
          options={QUICKBOOKS_OPTIONS.map(({ icon, badge, iconColor, ...option }) => ({
            ...option,
            label: (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  className={classes.iconCircle}
                  style={{ background: iconColor ? iconColor + '22' : '#e0e7ef' }}
                >
                  {icon}
                </Box>
                <Box>
                  <Typography sx={optionTitleStyle}>{option.label}</Typography>
                  <Typography sx={optionDescStyle}>{option.description}</Typography>
                </Box>
              </Box>
            ),
            badge: badge
          }))}
          variant="card"
          sx={{ mt: 1, gap: 3 }}
        />

        <Box className={classes.buttonContainer} sx={{ mt: 4 }}>
          <Button variant="secondary" size="medium" onClick={handlePrev}>
            <ArrowBack sx={{ mr: 2, width: 16, height: 16 }} />
            Back
          </Button>
          <Button 
            variant="primary"
            size="medium"
            onClick={handleNext} 
            disabled={!onboardingData.quickBooks}
          >
            Complete Setup
            <ArrowForward sx={{ ml: 2, width: 16, height: 16 }} />
          </Button>
        </Box>
      </Box>

      <QuickBooksDesktopDialog
        open={showEnterpriseDialog}
        onClose={() => setShowEnterpriseDialog(false)}
        onSendInfo={handleSendInfo}
        emailSent={emailSent}
        icon={QUICKBOOKS_OPTIONS.find(o => o.value === 'desktop')?.icon}
      />
    </>
  );
};

export default QuickBooksStep;
