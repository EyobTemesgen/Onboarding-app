
import { Monitor, Computer, Close, CalendarToday } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { useQuickbooksStyles } from "./styled";
import QuickBooksDesktopDialog from "./QuickBooksDesktopDialog";
import { useState } from "react";
import { RadioGroup } from "@/components/ui/radio-group";
import OnboardingStepLayout from '../OnboardingFlow/OnboardingStepLayout';

const QUICKBOOKS_OPTIONS = [
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

type StepProps = {
  onboardingData: any;
  setOnboardingData: (fn: any) => void;
  setCurrentStep: (fn: any) => void;
};

export default function QuickBooksStep({ onboardingData, setOnboardingData, setCurrentStep }: StepProps) {
  const [showEnterpriseDialog, setShowEnterpriseDialog] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const classes = useQuickbooksStyles();
  const handleSelect = (_event, value) => {
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
  const canComplete = !!onboardingData.quickBooks;
  return (
    <>
      <OnboardingStepLayout
        title="Do you use QuickBooks for accounting?"
        subtitle="We'll configure the right financial sync to keep everything connected."
        onBack={() => setCurrentStep((step) => step - 1)}
        onComplete={() => setCurrentStep((step) => step + 1)}
        disableComplete={!canComplete}
        completeLabel="Complete Setup"
        hideNext
      >
        <RadioGroup
          value={onboardingData.quickBooks}
          onChange={handleSelect}
          options={QUICKBOOKS_OPTIONS.map(({ icon, badge, iconColor, value, ...option }) => {
            const isSelected = onboardingData.quickBooks === value;
            let borderColor;
            if (value === 'online' && !isSelected) borderColor = '#bbf7d0';
            return {
              ...option,
              value,
              label: (
                <Box>
                  <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '15px', lineHeight: '20px' }}>{option.label}</Typography>
                  <Typography sx={{ color: '#64748b', fontSize: '13px', lineHeight: '18px', fontWeight: 400 }}>{option.description}</Typography>
                </Box>
              ),
              icon,
              badge,
              borderColor,
              iconBgColor: iconColor ? iconColor + '22' : '#e0e7ef',
            };
          })}
          variant="card"
          sx={{ mt: 1, gap: 3 }}
        />
      </OnboardingStepLayout>
      <QuickBooksDesktopDialog
        open={showEnterpriseDialog}
        onClose={() => setShowEnterpriseDialog(false)}
        onSendInfo={handleSendInfo}
        emailSent={emailSent}
        icon={QUICKBOOKS_OPTIONS.find(o => o.value === 'desktop')?.icon}
      />
    </>
  );
}
