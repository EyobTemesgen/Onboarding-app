
import OnboardingFlow from "@/components/steps/OnboardingFlow/OnboardingFlow";
import { OnboardingProvider } from "./contexts/OnboardingContext";

const Index = () => {
  return (
    <OnboardingProvider>
      <OnboardingFlow />
    </OnboardingProvider>
  );
};

export default Index;
