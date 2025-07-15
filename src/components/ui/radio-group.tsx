import * as React from "react";
import { RadioGroup as MuiRadioGroup, FormControlLabel, Radio, Box } from "@mui/material";

interface RadioOption {
  value: string;
  label: string;
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
              border: value === option.value ? '1px solid #3b82f6' : '1px solid #e2e8f0',
              borderRadius: 1,
              p: 2,
              cursor: 'pointer',
              backgroundColor: value === option.value ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
              '&:hover': {
                backgroundColor: '#f8fafc',
              },
              display: 'flex',
              alignItems: 'flex-start',
              gap: 1,
            }}
            onClick={() => onChange({ target: { value: option.value } } as any, option.value)}
          >
            <Radio
              checked={value === option.value}
              sx={{
                '&.Mui-checked': {
                  color: '#3b82f6',
                },
                mt: 0.5,
              }}
            />
            <Box sx={{ flex: 1 }}>{option.label}</Box>
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
