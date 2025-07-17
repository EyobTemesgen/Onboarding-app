// Onboarding Data Types
export interface OnboardingData {
  salesChannels: string[];
  inventoryTracking: string;
  shippingLocation: string;
  quickBooks: string;
  productImport: string;
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