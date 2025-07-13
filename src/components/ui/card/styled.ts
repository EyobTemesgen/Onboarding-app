import { styled } from "@mui/material/styles";
import { 
  Card as MuiCard, 
  CardProps as MuiCardProps,
  CardHeader as MuiCardHeader,
  CardHeaderProps as MuiCardHeaderProps,
  CardContent as MuiCardContent,
  CardContentProps as MuiCardContentProps,
  CardActions as MuiCardActions,
  CardActionsProps as MuiCardActionsProps,
} from "@mui/material";

export const Card = styled(MuiCard)<MuiCardProps>(({ theme }) => ({
  borderRadius: theme.spacing(1),
  border: `1px solid ${theme.palette.divider}`,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  boxShadow: theme.shadows[1],
}));

export const CardHeader = styled(MuiCardHeader)<MuiCardHeaderProps>(({ theme }) => ({
  padding: theme.spacing(3),
  '& .MuiCardHeader-content': {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.75),
  },
}));

export const CardContent = styled(MuiCardContent)<MuiCardContentProps>(({ theme }) => ({
  padding: theme.spacing(3),
  paddingTop: 0,
}));

export const CardFooter = styled(MuiCardActions)<MuiCardActionsProps>(({ theme }) => ({
  padding: theme.spacing(3),
  paddingTop: 0,
  display: 'flex',
  alignItems: 'center',
})); 