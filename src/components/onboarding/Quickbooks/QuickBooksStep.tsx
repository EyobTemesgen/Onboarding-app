import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogActions, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft, Mail } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { StepProps } from "../types";
import { useQuickbooksStyles } from "./styled";
import { QUICKBOOKS_OPTIONS } from "./const.tsx";

const QuickBooksStep = ({ data, updateData, onNext, onPrev }: StepProps) => {
  const [showEnterpriseDialog, setShowEnterpriseDialog] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const classes = useQuickbooksStyles();

  const handleSelect = (optionId: string) => {
    if (optionId === "desktop") {
      setShowEnterpriseDialog(true);
    } else {
      updateData("quickBooks", optionId);
    }
  };

  const handleSendInfo = () => {
    setEmailSent(true);
    setTimeout(() => {
      setShowEnterpriseDialog(false);
      setEmailSent(false);
      updateData("quickBooks", "desktop");
    }, 2000);
  };

  const canProceed = data.quickBooks !== "";

  return (
    <>
      <Box className={classes.container}>
        <Box className={classes.headerSection}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              fontWeight: 'bold', 
              color: '#111827', 
              fontSize: '24px', 
              lineHeight: '32px'
            }}
          >
            Do you use QuickBooks for accounting?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#4b5563', 
              fontSize: '16px',
              lineHeight: '24px'
            }}
          >
            We'll configure the right financial sync to keep everything connected.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 4 }}>
          {QUICKBOOKS_OPTIONS.map((option) => {
            const isSelected = data.quickBooks === option.value;
            return (
              <Box
                key={option.value}
                sx={{
                  border: isSelected ? '2px solid #3b82f6' : '1px solid #e2e8f0',
                  borderRadius: '12px',
                  p: 3,
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#f0f9ff' : '#fff',
                  position: 'relative',
                  boxShadow: option.highlight && isSelected ? '0 0 0 2px #bbf7d0' : undefined,
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: '#f8fafc',
                  },
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
                onClick={() => handleSelect(option.value)}
              >
                {option.badge && (
                  <Box sx={{
                    position: 'absolute',
                    top: -16,
                    left: 24,
                    background: '#22c55e',
                    color: '#fff',
                    fontSize: 12,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    zIndex: 1,
                  }}>{option.badge}</Box>
                )}
                <Box sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: isSelected
                    ? '#dbeafe'
                    : option.iconColor || '#e0e7ef',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mr: 2,
                }}>
                  {option.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#0f172a', fontSize: 18, mb: 0.5 }}>{option.label}</Typography>
                  <Typography variant="body2" sx={{ color: '#475569', fontSize: 15 }}>{option.description}</Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                  <input
                    type="radio"
                    checked={isSelected}
                    onChange={() => handleSelect(option.value)}
                    style={{ width: 20, height: 20 }}
                    aria-label={option.label}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>

        <Box className={classes.buttonContainer} sx={{ mt: 4 }}>
          <Button variant="outline" onClick={onPrev} className={classes.backButton}>
            <ArrowLeft sx={{ mr: 2, width: 16, height: 16 }} />
            Back
          </Button>
          <Button 
            onClick={onNext} 
            disabled={!canProceed}
            className={classes.nextButton}
          >
            Complete Setup
            <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
          </Button>
        </Box>
      </Box>

      <Dialog open={showEnterpriseDialog}>
        <DialogContent sx={{ maxWidth: 448 }}>
          <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {QUICKBOOKS_OPTIONS.find(o => o.value === 'desktop')?.icon}
            QuickBooks Desktop Integration
            <IconButton
              aria-label="close"
              onClick={() => setShowEnterpriseDialog(false)}
              sx={{ ml: 'auto' }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <Typography sx={{ mb: 2 }}>
            QuickBooks Desktop requires our Advanced enterprise solution for full integration capabilities. 
            Our team can show you how this works and discuss pricing options.
          </Typography>
          <Box sx={{ background: '#fff7ed', border: '1px solid #fdba74', borderRadius: 2, p: 2, my: 2 }}>
            <Typography sx={{ fontWeight: 500, color: '#9a3412', mb: 1 }}>What you'll get:</Typography>
            <ul style={{ color: '#ea580c', fontSize: 15, margin: 0, paddingLeft: 18 }}>
              <li>• Full QuickBooks Desktop sync</li>
              <li>• Advanced inventory management</li>
              <li>• Priority support</li>
              <li>• Custom integrations</li>
            </ul>
          </Box>
          <DialogActions sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, justifyContent: { sm: 'flex-end' }, gap: 3 }}>
            <Button variant="outline" onClick={() => setShowEnterpriseDialog(false)}>
              Maybe Later
            </Button>
            <Button onClick={handleSendInfo} sx={{ background: '#ea580c', color: '#fff', '&:hover': { background: '#c2410c' } }}>
              <Mail sx={{ mr: 2, width: 16, height: 16 }} />
              {emailSent ? "Sent!" : "Send Me Info"}
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuickBooksStep;
