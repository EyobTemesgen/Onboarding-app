import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useWelcomeStyles = makeStyles<Theme>(() => ({
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
