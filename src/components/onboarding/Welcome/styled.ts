import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useWelcomeStyles = makeStyles<Theme>(() => ({
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px', 
  },
  iconContainer: {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(to bottom right, #2563eb, #4338ca)', 
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '24px', 
    margin: '12px 0', 
    '@media (min-width: 900px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  featureCard: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px', 
  },
  featureIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    '& .MuiSvgIcon-root': {
      width: '24px',
      height: '24px',
    },
  },
  styledButton: {
    width: '100%',
    background: 'linear-gradient(to right, #2563eb, #4338ca)',
    color: 'white',
    padding: '12px 32px', 
    fontSize: '18px',
    height: '44px', 
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
    '&:hover': {
      background: 'linear-gradient(to right, #1d4ed8, #3730a3)',
    },
  },
})); 