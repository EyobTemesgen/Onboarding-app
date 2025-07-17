import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of onboarding data (reuse or import if already defined)
interface OnboardingData {
  salesChannels: string[];
  inventoryTracking: string;
  shippingLocation: string;
  quickBooks: string;
  productImport: string;
}

interface OnboardingContextType {
  currentStep: number;
  setCurrentStep: (step: number) => void;
  onboardingData: OnboardingData;
  setOnboardingData: React.Dispatch<React.SetStateAction<OnboardingData>>;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    salesChannels: [],
    inventoryTracking: "",
    shippingLocation: "",
    quickBooks: "",
    productImport: "",
  });

  return (
    <OnboardingContext.Provider value={{ currentStep, setCurrentStep, onboardingData, setOnboardingData }}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}; 