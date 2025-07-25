import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useOnboardingFlowStyles = makeStyles<Theme>(() => ({
  mainContainer: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #f8fafc, #dbeafe, #e0e7ff)', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px', 
  },
  progressContainer: {
    marginBottom: '20px', 
  },
  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '6px', 
  },
  stepText: {
    fontSize: '12px', 
    fontWeight: 500, 
    color: '#334155', 
  },
  progressText: {
    fontSize: '10px', 
    color: '#475569', 
  },
})); 

export const cardStyle = {
  borderRadius: '8px',
  boxShadow: '0 4px 16px 0 rgba(16, 30, 54, 0.08)',
  maxWidth: 610,
  margin: '12px auto',
  padding: '12px 16px 10px 16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1,
}; 

export const optionTitleStyle = {
  fontWeight: 700,
  color: '#0f172a',
  fontSize: '15px',
  lineHeight: '20px',
};

export const optionDescStyle = {
  color: '#64748b',
  fontSize: '13px',
  lineHeight: '18px',
  fontWeight: 400,
}; 

export const stepTitleStyle = {
  fontWeight: 500,
  color: '#0f172a',
  fontSize: '28px',
  lineHeight: '28px',
};

export const stepSubtitleStyle = {
  color: '#475569',
  fontSize: '16px',
  lineHeight: '24px',
  marginTop: 2,
}; 