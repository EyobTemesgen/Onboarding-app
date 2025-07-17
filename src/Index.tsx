
import OnboardingFlow from "@/components/onboarding/OnboardingFlow/OnboardingFlow";
import { OnboardingProvider } from "./contexts/OnboardingContext";

const Index = () => {
  return (
    <OnboardingProvider>
      <OnboardingFlow />
    </OnboardingProvider>
  );
};

export default Index;
