import * as React from "react";
import {
  RadioGroup as MuiRadioGroup,
  RadioGroupProps as MuiRadioGroupProps,
  Radio,
  FormControlLabel,
  FormControlLabelProps,
  Box
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledRadioGroup = styled(MuiRadioGroup)<MuiRadioGroupProps>(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(1),
}));

const StyledRadio = styled(Radio)(({ theme }) => ({
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px', // space-y-3 = 12px
}));

const CardOption = styled(Box)<{ selected?: boolean }>(({ theme, selected }) => ({
  border: selected ? '1px solid #3b82f6' : '1px solid #e2e8f0', // border-blue-500 or border-slate-200
  borderRadius: '8px', // rounded-lg
  padding: '16px', // p-4
  cursor: 'pointer',
  transition: 'all 0.2s',
  backgroundColor: selected ? 'rgba(59, 130, 246, 0.05)' : 'transparent', // bg-blue-50/50 when selected
  '&:hover': {
    backgroundColor: '#f8fafc', // hover:bg-slate-50
  },
}));

const CardContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px', // space-x-3 = 12px
}));

const CardLabel = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const StyledRadioForCard = styled(StyledRadio)(({ theme }) => ({
  marginTop: '4px', // mt-1
}));

interface Option {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

interface RadioGroupProps extends MuiRadioGroupProps {
  options?: Option[];
  variant?: 'default' | 'card';
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, options, children, variant = 'default', ...props }, ref) => {
    if (variant === 'card' && options) {
      return (
        <CardContainer>
          {options.map((option) => (
            <CardOption
              key={option.value}
              selected={props.value === option.value}
              onClick={() => {
                if (props.onChange) {
                  props.onChange({ target: { value: option.value } } as any, option.value);
                }
              }}
            >
              <CardContent>
                <StyledRadioForCard
                  checked={props.value === option.value}
                  onChange={() => {}}
                />
                <CardLabel>
                  {option.label}
                </CardLabel>
              </CardContent>
            </CardOption>
          ))}
        </CardContainer>
      );
    }

    return (
      <StyledRadioGroup ref={ref} className={className} {...props}>
        {options
          ? options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<StyledRadio />}
                label={option.label}
                disabled={option.disabled}
                className={option.className}
              />
            ))
          : children}
      </StyledRadioGroup>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
