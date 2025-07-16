import * as React from "react";
import { RadioGroup as MuiRadioGroup, FormControlLabel, Radio, Box, Typography } from "@mui/material";

interface RadioOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

interface RadioGroupProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  options?: RadioOption[];
  children?: React.ReactNode;
  variant?: 'default' | 'card';
  className?: string;
  sx?: any;
}

const RadioGroup = ({
  className,
  options,
  children,
  variant = 'default',
  value,
  onChange,
  sx,
  ...props
}: RadioGroupProps) => {
  if (variant === 'card' && options) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, ...sx }}>
        {options.map((option) => (
          <Box
            key={option.value}
            sx={{
              position: 'relative', // Added for correct absolute positioning of badge
              border: value === option.value ? '1px solid #3b82f6' : '1px solid #e2e8f0',
              borderRadius: 1,
              p: 2,
              cursor: 'pointer',
              backgroundColor: value === option.value ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
              '&:hover': {
                backgroundColor: '#f8fafc',
              },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px',
              minHeight: '64px',
              width: '100%'
            }}
            onClick={() => onChange({ target: { value: option.value } } as any, option.value)}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1, minWidth: 0 }}>
              {option.icon && (
                <Box sx={{ color: '#64748b', fontSize: '1.25rem' }}>
                  {option.icon}
                </Box>
              )}
              <Typography 
                sx={{
                  color: '#475569',
                  fontSize: '16px',
                  lineHeight: '24px'
                }}
              >
                {option.label}
              </Typography>
            </Box>
            <Radio 
              checked={value === option.value}
              onChange={(event) => onChange(event, option.value)}
              value={option.value}
              sx={{ 
                color: '#64748b', 
                '&.Mui-checked': { color: '#3b82f6' },
                ml: 2,
                fontSize: '1.25rem'
              }}
            />
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <MuiRadioGroup
      value={value}
      onChange={onChange}
      className={className}
      sx={{ display: 'grid', gap: 1, ...sx }}
      {...props}
    >
      {options
        ? options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio sx={{ '&.Mui-checked': { color: '#3b82f6' } }} />}
              label={option.label}
              disabled={option.disabled}
              className={option.className}
            />
          ))
        : children}
    </MuiRadioGroup>
  );
};

export { RadioGroup };
