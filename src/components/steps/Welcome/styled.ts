import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useWelcomeStyles = makeStyles<Theme>(() => ({
  page: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  logo: {
    width: '64px',
    height: '64px',
    background: 'linear-gradient(to bottom right, #2563eb, #4338ca)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    boxShadow:
      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  highlights: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '20px',
    margin: '0',
    '@media (min-width: 900px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  highlightCard: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px', 
  },
  highlightIcon: {
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
}));
