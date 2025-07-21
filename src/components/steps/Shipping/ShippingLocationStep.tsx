
import { RadioGroup } from "@/components/ui/radio-group.tsx";
import { Home, Business as Building2, LocalShipping as Truck, Schedule as Clock } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { useShippingStyles } from "./styled";
import OnboardingStepLayout from '../OnboardingFlow/OnboardingStepLayout';

const SHIPPING_LOCATION_OPTIONS = [
  {
    value: "one_location",
    label: "One location",
    description: "We'll set up streamlined warehouse management and shipping integrations.",
    icon: <Home />,
    iconBg: "#e0f2fe"
  },
  {
    value: "multiple_warehouses",
    label: "Multiple warehouses",
    description: "Advanced multi-location tracking with smart allocation rules.",
    icon: <Building2 />,
    iconBg: "#d1fae5"
  },
  {
    value: "third_party",
    label: "3PL or Amazon FBA",
    description: "Seamless integration with third-party logistics providers.",
    icon: <Truck />,
    iconBg: "#f3e8ff"
  },
  {
    value: "not_shipping",
    label: "Not shipping yet",
    description: "We'll prepare your fulfillment setup for when you're ready to launch.",
    icon: <Clock />,
    iconBg: "#e0e7ff"
  }
];

type StepProps = {
  onboardingData: any;
  setOnboardingData: (fn: any) => void;
  setCurrentStep: (fn: any) => void;
};

export default function ShippingLocationStep({ onboardingData, setOnboardingData, setCurrentStep }: StepProps) {
  const classes = useShippingStyles();
  const handleSelect = (_event, value) => {
    setOnboardingData(prev => ({ ...prev, shippingLocation: value }));
  };
  const canProceed = !!onboardingData.shippingLocation;
  return (
    <OnboardingStepLayout
      title="Where do you fulfill orders?"
      subtitle="We'll configure the right fulfillment workflow for your operations."
      onNext={() => setCurrentStep((step) => step + 1)}
      onBack={() => setCurrentStep((step) => step - 1)}
      disableNext={!canProceed}
      nextLabel="Set Up Fulfillment"
      hideComplete
    >
      <RadioGroup
        value={onboardingData.shippingLocation}
        onChange={handleSelect}
        options={SHIPPING_LOCATION_OPTIONS.map((option) => ({
          value: option.value,
          label: (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: option.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2
              }}>
                {option.icon}
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '15px', lineHeight: '20px' }}>{option.label}</Typography>
                <Typography sx={{ color: '#64748b', fontSize: '13px', lineHeight: '18px', fontWeight: 400 }}>{option.description}</Typography>
              </Box>
            </Box>
          )
        }))}
        variant="card"
      />
    </OnboardingStepLayout>
  );
}
