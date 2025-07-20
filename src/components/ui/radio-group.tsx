import * as React from "react";
import { RadioGroup as MuiRadioGroup, FormControlLabel, Radio, Box, Typography } from "@mui/material";

interface RadioOption {
  value: string;
  label: string | React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  badge?: string; // NEW: badge text (e.g., 'Most Popular')
  borderColor?: string; // NEW: custom border color
  iconBgColor?: string; // NEW: custom icon circle background
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
        {options.map((option) => {
          // Determine border color
          const isSelected = value === option.value;
          const borderColor = isSelected
            ? '#3b82f6' // blue for selected
            : option.borderColor || '#e2e8f0'; // custom or default
          return (
            <Box
              key={option.value}
              sx={{
                position: 'relative',
                border: `1.5px solid ${borderColor}`,
                borderRadius: '8px',
                p: 2,
                cursor: 'pointer',
                backgroundColor: isSelected ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
                '&:hover': {
                  backgroundColor: '#f8fafc',
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                minHeight: '64px',
                width: '100%',
                mt: option.badge ? 2 : 0 // add margin if badge present
              }}
              onClick={() => onChange({ target: { value: option.value } } as any, option.value)}
            >
              {/* Badge */}
              {option.badge && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 24,
                    transform: 'translateY(-50%)',
                    background: '#22c55e',
                    color: '#fff',
                    fontSize: 12,
                    fontWeight: 600,
                    borderRadius: '6px',
                    px: 1.5,
                    py: 0.25,
                    zIndex: 2,
                    boxShadow: '0 2px 8px 0 rgba(34,197,94,0.08)'
                  }}
                >
                  {option.badge}
                </Box>
              )}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
                {option.icon && (
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: option.iconBgColor || '#e0e7ef',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                    }}
                  >
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
                checked={isSelected}
                onChange={(event) => onChange(event, option.value)}
                value={option.value}
                sx={{ 
                  color: '#64748b', 
                  '&.Mui-checked': { color: '#013674' },
                  ml: 2,
                  fontSize: '1.25rem'
                }}
              />
            </Box>
          );
        })}
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
              control={<Radio sx={{ '&.Mui-checked': { color: '#013674' } }} />}
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
