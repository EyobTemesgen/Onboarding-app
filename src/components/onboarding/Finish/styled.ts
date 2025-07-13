import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export const useFinishStyles = makeStyles<Theme>((theme) => ({
  container: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px', 
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  iconCircle: {
    width: '80px',
    height: '80px',
    backgroundColor: '#22c55e',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
  title: {
    fontWeight: 'bold',
    color: '#111827',
    fontSize: '30px',
    lineHeight: '36px',
  },
  subtitle: {
    color: '#64748b',
    fontSize: '18px',
    maxWidth: '672px',
    margin: '0 auto',
  },
  styledCard: {
    padding: '24px',
    background: 'linear-gradient(to right, #eff6ff, #e0e7ff)',
    border: '1px solid #bfdbfe',
  },
  cardTitle: {
    fontWeight: 600,
    color: '#111827',
    fontSize: '20px',
    marginBottom: '16px',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '16px',
    '@media (min-width: 900px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  },
  featureCard: {
    textAlign: 'center',
  },
  featureIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 8px auto',
    '& .MuiSvgIcon-root': {
      width: '24px',
      height: '24px',
    },
  },
  featureTitle: {
    fontWeight: 500,
    color: '#111827',
    fontSize: '16px',
  },
  featureDesc: {
    color: '#64748b',
    fontSize: '14px',
  },
  stepsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  stepsTitle: {
    fontWeight: 600,
    color: '#111827',
    fontSize: '20px',
  },
  stepsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  stepItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textAlign: 'left',
    backgroundColor: '#f9fafb', 
    padding: '16px', 
    borderRadius: '8px',
    fontSize: '14px',
  },
  stepIcon: {
    width: '32px',
    height: '32px',
    backgroundColor: '#2563eb',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 600,
    fontSize: '14px',
  },
  stepTitle: {
    fontWeight: 500,
    color: '#111827',
    fontSize: '16px',
  },
  stepDesc: {
    color: '#64748b',
    fontSize: '14px',
  },
  buttonSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  finishButton: {
    width: '100%',
    backgroundColor: '#22c55e',
    color: 'white',
    padding: '12px 0',
    fontSize: '18px',
    '&:hover': {
      backgroundColor: '#16a34a',
    },
  },
  helperText: {
    fontSize: '14px',
    color: '#64748b',
  },
})); 