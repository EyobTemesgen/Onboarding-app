import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useInventoryTrackingStyles = makeStyles<Theme>(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px', 
  },
})); 