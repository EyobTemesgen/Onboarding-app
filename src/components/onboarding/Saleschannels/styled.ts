import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useSaleschannelsStyles = makeStyles<Theme>(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  headerSection: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', 
  },
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '24px', 
  },
  backButton: {
    border: '1px solid #cbd5e1', 
    color: '#334155', 
    '&:hover': {
      backgroundColor: '#f8fafc', 
    },
  },
  nextButton: {
    background: 'linear-gradient(to right, #2563eb, #4338ca)', 
    color: 'white',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
    '&:hover': {
      background: 'linear-gradient(to right, #1d4ed8, #3730a3)', 
    },
  },
})); 