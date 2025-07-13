
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { StepProps } from "../types";
import { useSaleschannelsStyles } from "./styled";
import { SALES_CHANNEL_OPTIONS } from "./const";

const SalesChannelStep = ({ data, updateData, onNext, onPrev }: StepProps) => {
  const classes = useSaleschannelsStyles();

  const handleToggle = (optionId: string) => {
    const currentChannels = data.salesChannels;
    const newChannels = currentChannels.includes(optionId)
      ? currentChannels.filter(id => id !== optionId)
      : [...currentChannels, optionId];
    
    updateData("salesChannels", newChannels);
  };

  const canProceed = data.salesChannels.length > 0;

  return (
    <Box className={classes.container}>
      <Box className={classes.headerSection}>
        <Typography 
          variant="h4" 
          component="h2" 
          sx={{ 
            fontWeight: 'bold', 
            color: '#0f172a',
            fontSize: '24px', 
            lineHeight: '32px'
          }}
        >
          Where do you sell today?
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#475569', 
            fontSize: '16px',
            lineHeight: '24px'
          }}
        >
          Select all that apply. We'll configure the right integrations to centralize your operations.
        </Typography>
      </Box>

      <Box className={classes.optionsContainer}>
        {SALES_CHANNEL_OPTIONS.map((option) => (
          <Box
            key={option.id}
            className={`${classes.optionCard} ${data.salesChannels.includes(option.id) ? classes.optionCardSelected : ''}`}
            onClick={() => handleToggle(option.id)}
          >
            <Box className={classes.optionContent}>
              <Checkbox
                checked={data.salesChannels.includes(option.id)}
                onChange={() => {}}
                sx={{ mt: 0.5 }}
              />
              <Box className={classes.optionText}>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={{ 
                    fontWeight: 500, 
                    color: '#0f172a', 
                    fontSize: '16px',
                    lineHeight: '24px'
                  }}
                >
                  {option.label}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#475569',   
                    fontSize: '14px', 
                    lineHeight: '20px'
                  }}
                >
                  {option.description}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box className={classes.buttonContainer}>
        <Button variant="outline" onClick={onPrev} className={classes.backButton}>
          <ArrowLeft sx={{ mr: 2, width: 16, height: 16 }} />
          Back
        </Button>
        <Button 
          onClick={onNext} 
          disabled={!canProceed}
          className={classes.nextButton}
        >
          Next
          <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default SalesChannelStep;
