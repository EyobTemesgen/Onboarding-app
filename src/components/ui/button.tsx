import * as React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'outline' | 'text';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className, ...props }, ref) => (
    <MuiButton
      ref={ref}
      variant={variant === 'outline' ? 'outlined' : variant === 'text' ? 'text' : 'contained'}
      color="primary"
      disableRipple
      sx={{ textTransform: 'none', fontWeight: 500 }}
      className={className}
      {...props}
    />
  )
);

export { Button }; 