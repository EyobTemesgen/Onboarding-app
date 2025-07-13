import * as React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled MUI Button with custom variants
const StyledButton = styled(MuiButton)<{ variant?: string; size?: string }>(({ theme, variant, size }) => ({
  textTransform: 'none',
  fontWeight: 500,
  gap: theme.spacing(1),
  '& .MuiSvgIcon-root': {
    pointerEvents: 'none',
    fontSize: '1rem',
    flexShrink: 0,
  },
  ...(variant === 'outline' && {
    borderColor: theme.palette.divider,
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }),
  ...(variant === 'secondary' && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  }),
  ...(variant === 'ghost' && {
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }),
  ...(variant === 'link' && {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    '&:hover': {
      backgroundColor: 'transparent',
      textDecoration: 'underline',
    },
  }),
  ...(size === 'sm' && {
    height: '36px',
    padding: theme.spacing(0, 1.5),
    fontSize: '0.875rem',
  }),
  ...(size === 'lg' && {
    height: '44px',
    padding: theme.spacing(0, 4),
    fontSize: '1rem',
  }),
  ...(size === 'icon' && {
    minWidth: '40px',
    width: '40px',
    height: '40px',
    padding: 0,
  }),
}));

export interface ButtonProps extends Omit<MuiButtonProps, 'variant' | 'size'> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    // Map our variants to MUI variants
    const muiVariant = variant === 'default' ? 'contained' : 
                      variant === 'outline' ? 'outlined' : 
                      variant === 'ghost' || variant === 'link' ? 'text' : 'contained';
    
    // Map our sizes to MUI sizes
    const muiSize = size === 'default' ? 'medium' : 
                   size === 'sm' ? 'small' : 
                   size === 'lg' ? 'large' : 'medium';

    // Handle destructive variant
    const color = variant === 'destructive' ? 'error' : 'primary';

    return (
      <StyledButton
        ref={ref}
        variant={muiVariant}
        size={muiSize}
        color={color}
        className={className}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
