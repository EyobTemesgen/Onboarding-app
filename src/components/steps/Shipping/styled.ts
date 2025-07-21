import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useShippingStyles = makeStyles<Theme>(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px', 
  },
  headerSection: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', 
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