
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group.tsx";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft, Home, Business as Building2, LocalShipping as Truck, Schedule as Clock } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { useShippingStyles } from "./styled";
import { useOnboarding } from "@/contexts/OnboardingContext";
import { optionTitleStyle, optionDescStyle } from '@/theme/globalStyles';
import * as React from "react";

interface ShippingLocationOption {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
}

const SHIPPING_LOCATION_OPTIONS: ShippingLocationOption[] = [
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

const ShippingLocationStep = () => {
  const { onboardingData, setOnboardingData, currentStep, setCurrentStep } = useOnboarding();
  const classes = useShippingStyles();

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    setOnboardingData(prev => ({ ...prev, shippingLocation: value }));
  };

  const canProceed = onboardingData.shippingLocation !== "";

  const onNext = () => setCurrentStep(currentStep + 1);
  const onPrev = () => setCurrentStep(currentStep - 1);

  return (
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
          Where do you fulfill orders?
        </Typography>
        <Typography 
          variant="body1"
          sx={{
            color: '#475569',
            fontSize: '16px',
            lineHeight: '24px'
          }}
        >
          We'll configure the right fulfillment workflow for your operations.
        </Typography>
      </Box>

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
                <Typography sx={optionTitleStyle}>{option.label}</Typography>
                <Typography sx={optionDescStyle}>{option.description}</Typography>
              </Box>
            </Box>
          )
        }))}
        variant="card"
      />

      <Box className={classes.buttonContainer}>
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
          Set Up Fulfillment
          <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default ShippingLocationStep;
