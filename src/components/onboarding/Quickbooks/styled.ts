import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useQuickbooksStyles = makeStyles<Theme>(() => ({
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
    border: '1px solid #d1d5db', 
    color: '#374151',
    '&:hover': {
      backgroundColor: '#f9fafb', 
    },
  },
  nextButton: {
    backgroundColor: '#2563eb',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1d4ed8',
    },
  },
  dialogContentStyled: {
    maxWidth: '448px',
  },
  infoBox: {
    backgroundColor: '#fffbeb',
    border: '1px solid #fed7aa',
    borderRadius: '8px',
    padding: '16px',
  },
  infoList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  infoListItem: {
    fontSize: '14px',
    color: '#9a3412',
    lineHeight: '20px',
  },
  dialogButton: {
    backgroundColor: '#ea580c',
    color: 'white',
    '&:hover': {
      backgroundColor: '#c2410c',
    },
  },
})); 