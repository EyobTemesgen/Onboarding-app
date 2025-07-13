import * as React from "react";
import { 
  Card as MuiCard, 
  CardProps as MuiCardProps,
  CardHeader as MuiCardHeader,
  CardHeaderProps as MuiCardHeaderProps,
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps,
  Typography,
  TypographyProps
} from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled MUI Card components
const Card = styled(MuiCard)<MuiCardProps>(({ theme }) => ({
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[1],
}));

const CardHeader = styled(MuiCardHeader)<MuiCardHeaderProps>(({ theme }) => ({
  padding: theme.spacing(3),
  '& .MuiCardHeader-content': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.75),
  },
}));

const CardTitle = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <Typography
      ref={ref}
      variant="h5"
      component="h3"
      fontWeight={600}
      className={className}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <Typography
      ref={ref}
      variant="body2"
      color="text.secondary"
      className={className}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

const CardContent = styled(MuiCardContent)<MuiCardContentProps>(({ theme }) => ({
  padding: theme.spacing(3),
  paddingTop: 0,
}));

const CardFooter = styled(MuiCardActions)<MuiCardActionsProps>(({ theme }) => ({
  padding: theme.spacing(3),
  paddingTop: 0,
  display: 'flex',
  alignItems: 'center',
}));

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
