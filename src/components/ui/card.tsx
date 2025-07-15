import * as React from "react";
import { Card as MuiCard, CardProps } from "@mui/material";

interface StyledCardProps extends CardProps {
  className?: string;
  sx?: any;
}

const Card = React.forwardRef<HTMLDivElement, StyledCardProps>(
  ({ className, sx, ...props }, ref) => (
    <MuiCard
      ref={ref}
      className={className}
      sx={{
        borderRadius: 1,
        border: `1px solid ${theme => theme.palette.divider}`,
        backgroundColor: theme => theme.palette.background.paper,
        color: theme => theme.palette.text.primary,
        boxShadow: theme => theme.shadows[1],
        ...sx,
      }}
      {...props}
    />
  )
);

Card.displayName = "Card";

export { Card };
