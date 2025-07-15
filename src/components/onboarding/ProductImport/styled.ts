import { styled } from '@mui/material/styles';
import MuiTooltip, { TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const StyledTooltip = styled(MuiTooltip)<MuiTooltipProps>(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.grey[100],
    fontSize: '0.875rem',
    padding: theme.spacing(1, 1.5),
    borderRadius: theme.spacing(0.5),
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[4],
  },
}));

export const useProductImportStyles = makeStyles<Theme>(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  successContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px', 
  },
  successIcon: {
    width: '64px',
    height: '64px',
    backgroundColor: '#dcfce7',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
  successContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  previewBox: {
    backgroundColor: '#f8fafc', 
    borderRadius: '8px',
    padding: '16px',
  },
  previewList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  previewItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '14px',
  },
  headerSection: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  methodGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '16px',
    '@media (min-width: 900px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  methodCard: {
    border: '1px solid #e2e8f0', 
    borderRadius: '8px', 
    padding: '24px', 
    cursor: 'pointer',
    transition: 'all 0.2s',
    '&:hover': {
      borderColor: '#2563eb', 
      backgroundColor: '#2563eb20',
    },
  },
  methodIcon: {
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
  methodContent: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px', 
  },
  methodInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px', 
    fontSize: '12px', 
    color: '#64748b', 
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '16px', 
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
    '&:hover': {
      background: 'linear-gradient(to right, #1d4ed8, #3730a3)', 
    },
  },
  helperText: {
    fontSize: '14px', 
    color: '#64748b', 
    alignSelf: 'center',
  },
})); 