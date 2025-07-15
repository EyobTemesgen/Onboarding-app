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
  contentWrapper: {
    width: '100%',
    maxWidth: '672px', 
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
  styledCard: {
    padding: '32px', 
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
    border: '0',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    backdropFilter: 'blur(8px)', 
  },
})); 