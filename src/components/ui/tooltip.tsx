import * as React from "react";
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTooltip = styled(MuiTooltip)<MuiTooltipProps>(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.grey[100],
    fontSize: '0.875rem',
    padding: theme.spacing(1, 1.5),
    borderRadius: theme.spacing(0.5),
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[4],
  },
}));

const Tooltip = StyledTooltip;

const TooltipTrigger = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
);

const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
);

// TooltipProvider is not needed in MUI as tooltips work without a provider
const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
