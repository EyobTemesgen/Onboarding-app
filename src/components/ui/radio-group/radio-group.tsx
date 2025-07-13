import * as React from "react";
import {
  FormControlLabel,
  FormControlLabelProps,
} from "@mui/material";
import { RadioGroupProps } from "./types";
import {
  StyledRadioGroup,
  StyledRadio,
  CardContainer,
  CardOption,
  CardContent,
  CardLabel,
  StyledRadioForCard
} from "./styled";

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
