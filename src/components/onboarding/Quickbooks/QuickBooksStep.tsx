
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
import { optionTitleStyle, optionDescStyle } from '@/theme/globalStyles';

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
          options={QUICKBOOKS_OPTIONS.map(({ icon, badge, iconColor, ...option }) => ({
            ...option,
            label: (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: iconColor ? iconColor + '22' : '#e0e7ef', // 22 for 13% opacity
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2
                }}>
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
