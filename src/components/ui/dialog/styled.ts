import { styled } from "@mui/material/styles";
import { 
  DialogContent as MuiDialogContent,
  DialogActions as MuiDialogActions,
  IconButton,
  Typography,
  Box
} from "@mui/material";

// Styled components
export const StyledDialogContent = styled(MuiDialogContent)(({ theme }) => ({
  // Base styles can be added here if needed
}));

export const StyledDialogHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  textAlign: 'center',
  '@media (min-width: 640px)': {
    textAlign: 'left',
  },
}));

export const StyledDialogFooter = styled(MuiDialogActions)(({ theme }) => ({
  flexDirection: 'column-reverse',
  '@media (min-width: 640px)': {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 1,
  },
}));

export const StyledDialogTitle = styled(Typography)(({ theme }) => ({
  variant: 'h6',
  component: 'h2',
  fontWeight: 600,
}));

export const StyledDialogDescription = styled(Typography)(({ theme }) => ({
  variant: 'body2',
  color: 'text.secondary',
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: theme.palette.grey[500],
}));

// Constants
export const DIALOG_STYLES = {
  closeButton: {
    position: 'absolute' as const,
    right: 8,
    top: 8,
    color: (theme: any) => theme.palette.grey[500],
  }
} as const; 