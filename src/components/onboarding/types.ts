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

// Next Step Types
export interface NextStep {
  title: string;
  description: string;
} 