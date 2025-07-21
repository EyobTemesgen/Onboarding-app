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
    backgroundColor: '#ffffff',
    '&:hover': {
      borderColor: '#2563eb', 
      backgroundColor: '#f8fafc',
    },
  },
  methodIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 16px',
    '& .MuiSvgIcon-root': {
      width: '24px',
      height: '24px',
    },
  },
  methodContent: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px', 
  },
  methodInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px', 
    fontSize: '12px', 
    color: '#64748b', 
    marginTop: '8px',
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
  // New styles extracted from component
  titleStyle: {
    fontWeight: 'bold',
    color: '#0f172a',
    fontSize: '24px',
    lineHeight: '32px',
  },
  subtitleStyle: {
    color: '#475569',
    fontSize: '16px',
    lineHeight: '24px',
  },
  successIconStyle: {
    display: 'flex',
    justifyContent: 'center',
  },
  previewTitleStyle: {
    fontWeight: 600,
    color: '#0f172a',
    fontSize: '16px',
    lineHeight: '24px',
    marginBottom: 3,
  },
  skuStyle: {
    fontWeight: 500,
    fontSize: '14px',
  },
  nameStyle: {
    color: '#475569',
    fontSize: '14px',
  },
  qtyStyle: {
    color: '#16a34a',
    fontWeight: 500,
    fontSize: '14px',
  },
  methodIconStyle: {
    display: 'flex',
    alignItems: 'center',
  },
  infoTextStyle: {
    fontSize: '10px',
  },
  helperTextStyle: {
    color: '#475569',
    fontSize: '14px',
  },
  iconStyle: {
    marginRight: 2,
    width: 16,
    height: 16,
  },
})); 