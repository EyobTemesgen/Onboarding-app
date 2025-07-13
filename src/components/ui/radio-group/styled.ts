import { styled } from "@mui/material/styles";
import { RadioGroup as MuiRadioGroup, Radio, Box } from "@mui/material";

export const StyledRadioGroup = styled(MuiRadioGroup)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(1),
}));

export const StyledRadio = styled(Radio)(({ theme }) => ({
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

export const CardContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px', 
}));

export const CardOption = styled(Box)<{ selected?: boolean }>(({ theme, selected }) => ({
  border: selected ? '1px solid #3b82f6' : '1px solid #e2e8f0',
  borderRadius: '8px',
  padding: '16px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  backgroundColor: selected ? 'rgba(59, 130, 246, 0.05)' : 'transparent', // bg-blue-50/50 when selected
  '&:hover': {
    backgroundColor: '#f8fafc',
  },
}));

export const CardContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '12px',
}));

export const CardLabel = styled(Box)(({ theme }) => ({
  flex: 1,
}));

export const StyledRadioForCard = styled(StyledRadio)(({ theme }) => ({
  marginTop: '4px', 
})); 