import * as React from "react";
import { RadioGroupProps as MuiRadioGroupProps } from "@mui/material";

export interface Option {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export interface RadioGroupProps extends MuiRadioGroupProps {
  options?: Option[];
  variant?: 'default' | 'card';
} 