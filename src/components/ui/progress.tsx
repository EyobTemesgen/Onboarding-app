import * as React from "react";
import { LinearProgress, LinearProgressProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledProgress = styled(LinearProgress)<LinearProgressProps>(({ theme }) => ({
  height: theme.spacing(2),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.action.hover,
  '& .MuiLinearProgress-bar': {
    borderRadius: theme.spacing(2),
  },
}));

const Progress = React.forwardRef<HTMLDivElement, LinearProgressProps>(
  ({ className, value, ...props }, ref) => (
    <StyledProgress
      ref={ref}
      variant="determinate"
      value={value || 0}
      className={className}
      {...props}
    />
  )
);

Progress.displayName = "Progress";

export { Progress };
