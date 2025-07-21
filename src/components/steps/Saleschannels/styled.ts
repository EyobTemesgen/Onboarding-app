import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useSaleschannelsStyles = makeStyles<Theme>(() => ({
  optionsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px', 
  },
  optionCard: {
    border: '1px solid #e2e8f0', 
    borderRadius: '8px', 
    padding: '16px', 
    cursor: 'pointer',
    transition: 'all 0.2s',
    backgroundColor: 'transparent',
    '&:hover': {
      backgroundColor: '#f8fafc', 
    },
  },
  optionCardSelected: {
    border: '1px solid #3b82f6', 
    backgroundColor: 'rgba(59, 130, 246, 0.1)', 
  },
  optionContent: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px', 
  },
  optionText: {
    flex: 1,
  },
})); 