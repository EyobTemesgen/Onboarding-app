import React from 'react';
import { Box, Typography } from '@mui/material';
import { Button } from '@/components/ui/button';
import { ArrowBack, ArrowForward } from "@mui/icons-material";

interface OnboardingStepLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onBack?: () => void;
  onNext?: () => void;
  onComplete?: () => void;
  nextLabel?: string;
  completeLabel?: string;
  disableNext?: boolean;
  disableComplete?: boolean;
  hideBack?: boolean;
  hideNext?: boolean;
  hideComplete?: boolean;
  topContent?: React.ReactNode;
}

const OnboardingStepLayout: React.FC<OnboardingStepLayoutProps> = ({
  title,
  subtitle,
  children,
  onBack,
  onNext,
  onComplete,
  nextLabel = 'Next',
  completeLabel = 'Complete Setup',
  disableNext,
  disableComplete,
  hideBack,
  hideNext,
  hideComplete,
  topContent,
}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      
      {topContent && <Box sx={{ mb: 1 }}>{topContent}</Box>}

      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 700, fontSize: 24, lineHeight: '32px', color: '#0f172a' }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            sx={{ color: '#475569', fontSize: 16, lineHeight: '24px', mt: 1 }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>

      <Box sx={{ flex: 1 }}>{children}</Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
        {!hideBack && (
          <Button variant="secondary" size="medium" onClick={onBack}>
            <ArrowBack sx={{ mr: 1, fontSize: 18 }} />
            Back
          </Button>
        )}

        <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
          {!hideNext && (
            <Button variant="primary" size="medium" onClick={onNext} disabled={disableNext}>
              {nextLabel}
              <ArrowForward sx={{ ml: 1, fontSize: 18 }} />
            </Button>
          )}
          {!hideComplete && (
            <Button variant="primary" size="medium" onClick={onComplete} disabled={disableComplete}>
              {completeLabel}
              <ArrowForward sx={{ ml: 1, fontSize: 18 }} />
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default OnboardingStepLayout;
