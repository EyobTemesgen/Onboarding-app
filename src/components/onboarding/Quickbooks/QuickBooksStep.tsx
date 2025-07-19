
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { StepProps } from "../types";
import { useQuickbooksStyles } from "./styled";
import { QUICKBOOKS_OPTIONS } from "./const.tsx";
import QuickBooksDesktopDialog from "./QuickBooksDesktopDialog";
import { useState } from "react";
import { RadioGroup } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useOnboarding } from "@/contexts/OnboardingContext";

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

  const canProceed = onboardingData.quickBooks !== "";

  const onNext = () => setCurrentStep(currentStep + 1);
  const onPrev = () => setCurrentStep(currentStep - 1);

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.headerSection}>
          <Typography 
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 600,
              color: '#0f172a',
              fontSize: '24px',
              lineHeight: '32px'
            }}
          >
            Do you use QuickBooks for accounting?
          </Typography>
          <Typography 
            variant="body1"
            sx={{
              color: '#475569',
              fontSize: '16px',
              lineHeight: '24px'
            }}
          >
            We'll configure the right financial sync to keep everything connected.
          </Typography>
        </Box>

        <RadioGroup
          value={onboardingData.quickBooks}
          onChange={handleSelect}
          options={QUICKBOOKS_OPTIONS.map(option => ({
            ...option,
            label: (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
                {option.badge && (
                  <Box sx={{
                    position: 'absolute',
                    top: -16,
                    left: 24,
                    background: '#22c55e',
                    color: '#fff',
                    fontSize: 12,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    zIndex: 1,
                  }}>{option.badge}</Box>
                )}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a', fontSize: 18, mb: 0.5 }}>{option.label}</Typography>
                  <Typography variant="body2" sx={{ color: '#475569', fontSize: 15 }}>{option.description}</Typography>
                </Box>
              </Box>
            )
          }))}
          variant="card"
          sx={{ mt: 4, gap: 3 }}
        />

        <Box className={classes.buttonContainer} sx={{ mt: 4 }}>
          <Button variant="secondary" size="medium" onClick={onPrev}>
            <ArrowLeft sx={{ mr: 2, width: 16, height: 16 }} />
            Back
          </Button>
          <Button 
            variant="primary"
            size="medium"
            onClick={onNext} 
            disabled={!canProceed}
          >
            Complete Setup
            <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
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
