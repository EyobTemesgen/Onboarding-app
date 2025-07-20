import React from 'react';
import { Card } from '@/components/ui/card';
import { Box, Typography } from '@mui/material';
import { Button } from '@/components/ui/button';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

export type OnboardingStepLayoutProps = {
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
};

export default function OnboardingStepLayout({
  title,
  subtitle,
  children,
  onBack,
  onNext,
  onComplete,
  nextLabel = 'Next',
  completeLabel = 'Complete Setup',
  disableNext = false,
  disableComplete = false,
  hideBack = false,
  hideNext = false,
  hideComplete = false,
  topContent
}: OnboardingStepLayoutProps) {
  return (
    <Card
      sx={{
        borderRadius: '8px',
        boxShadow: '0 4px 16px 0 rgba(16, 30, 54, 0.08)',
        maxWidth: 610,
        margin: '12px auto',
        padding: '25px 16px 0px 16px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      {topContent && <Box sx={{ mb: 1 }}>{topContent}</Box>}
      <Box sx={{ textAlign: 'center', mb: 1 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 700,
            color: 'rgb(15 23 42 / var(--tw-text-opacity, 1))',
            fontSize: '1.5rem',
            lineHeight: '2rem',
            fontFamily: `'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'sans-serif'`,
            letterSpacing: '-0.5px',
          }}
        >
          {title}
        </Typography>
        {subtitle && (
          <Typography
            variant="body1"
            sx={{ color: '#475569', fontSize: '16px', lineHeight: '24px', mt: 1 }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
      <Box sx={{ flex: 1, width: '100%', mb: 1 }}>{children}</Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, width: '100%' }}>
        <Box>
          {!hideBack && onBack && (
            <Button variant="secondary" size="medium" onClick={onBack}>
              <ArrowBack sx={{ mr: 1, fontSize: 18 }} />
              Back
            </Button>
          )}
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {!hideNext && onNext && (
            <Button
              variant="primary"
              size="medium"
              onClick={onNext}
              disabled={disableNext}
            >
              {nextLabel}
              <ArrowForward sx={{ ml: 1, fontSize: 18 }} />
            </Button>
          )}
          {!hideComplete && onComplete && (
            <Button
              variant="primary"
              size="medium"
              onClick={onComplete}
              disabled={disableComplete}
            >
              {completeLabel}
              <ArrowForward sx={{ ml: 1, fontSize: 18 }} />
            </Button>
          )}
        </Box>
      </Box>
    </Card>
  );
} 