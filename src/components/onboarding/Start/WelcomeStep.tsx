
import { Button } from "@/components/ui/button";
import { 
  ArrowForward as ArrowRight, 
  Inventory as Package, 
  TrendingUp, 
  FlashOn as Zap 
} from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { WelcomeStepProps } from "../types";
import { useWelcomeStyles } from "./styled";

const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  const classes = useWelcomeStyles();

  return (
    <Box className={classes.container}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Box className={classes.iconContainer}>
          <Package sx={{ width: 32, height: 32, color: 'white' }} />
        </Box>
        <Typography 
          variant="h3" 
          component="h1" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#0f172a',
            fontSize: '26px', 
            lineHeight: '32px' 
          }}
        >
          Welcome to Drive – Smarter Inventory Starts Here
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            color: '#475569', 
            maxWidth: '448px', 
            mx: 'auto',
            fontSize: '16px', 
            lineHeight: '24px'
          }}
        >
          Get multi-channel control, real-time sync, and workflow automation 
          up and running in minutes. Your growing business deserves modern inventory management.
        </Typography>
      </Box>

      <Box className={classes.featureGrid}>
        <Box className={classes.featureCard}>
          <Box 
            className={classes.featureIcon}
            sx={{ backgroundColor: '#d1fae5' }}
          >
            <TrendingUp sx={{ color: '#059669' }} />
          </Box>
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{ 
              fontWeight: 600, 
              color: '#0f172a',
              fontSize: '16px', 
              lineHeight: '24px'
            }}
          >
            Multi-Channel Control
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#475569',
              fontSize: '14px', 
              lineHeight: '20px'
            }}
          >
            Sync inventory across all your sales channels automatically
          </Typography>
        </Box>
        
        <Box className={classes.featureCard}>
          <Box 
            className={classes.featureIcon}
            sx={{ backgroundColor: '#e0f2fe' }}
          >
            <Zap sx={{ color: '#0284c7' }} />
          </Box>
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{ 
              fontWeight: 600, 
              color: '#0f172a', 
              fontSize: '16px', 
              lineHeight: '24px'
            }}
          >
            Real-Time Sync
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#475569', 
              fontSize: '14px', 
              lineHeight: '20px'
            }}
          >
            Never oversell again with instant inventory updates
          </Typography>
        </Box>
        
        <Box className={classes.featureCard}>
          <Box 
            className={classes.featureIcon}
            sx={{ backgroundColor: '#f3e8ff' }}
          >
            <Package sx={{ color: '#7c3aed' }} />
          </Box>
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{ 
              fontWeight: 600, 
              color: '#0f172a', 
              fontSize: '16px', 
              lineHeight: '24px'
            }}
          >
            Workflow Automation
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#475569', 
              fontSize: '14px', 
              lineHeight: '20px'
            }}
          >
            Streamline operations from order to fulfillment
          </Typography>
        </Box>
      </Box>

  
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', mt: '-8px' }}> 
        <Button 
          onClick={onNext} 
          size="lg"
          className={classes.styledButton}
        >
          Let's Go
          <ArrowRight sx={{ ml: 2, width: 20, height: 20 }} />
        </Button>
        <Typography 
          variant="body2" 
          sx={{ 
            color: '#64748b',   
            fontSize: '14px', 
            lineHeight: '20px'
          }}
        >
          Takes 3 minutes • Set up your first win fast
        </Typography>
      </Box>
    </Box>
  );
};

export default WelcomeStep;
