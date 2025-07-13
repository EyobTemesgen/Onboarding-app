// Onboarding Data Types
export interface OnboardingData {
  salesChannels: string[];
  inventoryTracking: string;
  shippingLocation: string;
  quickBooks: string;
  productImport: string;
}

// Step Component Props Types
export interface WelcomeStepProps {
  onNext: () => void;
}

export interface StepProps {
  data: OnboardingData;
  updateData: (key: keyof OnboardingData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export interface OnboardingCompleteProps {
  data: OnboardingData;
}

// Sales Channel Types
export interface SalesChannelOption {
  id: string;
  label: string;
  description: string;
}

// Next Step Types
export interface NextStep {
  title: string;
  description: string;
} 