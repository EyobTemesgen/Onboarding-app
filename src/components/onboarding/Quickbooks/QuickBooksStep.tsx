
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ArrowForward as ArrowRight, ArrowBack as ArrowLeft, Storage as HardDrive, Close as X, CalendarToday as Calendar, Mail } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import { StepProps } from "../types";
import { useQuickbooksStyles } from "./styled";
import { QUICKBOOKS_OPTIONS } from "./const.tsx";

const QuickBooksStep = ({ data, updateData, onNext, onPrev }: StepProps) => {
  const [showDialog, setShowDialog] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const classes = useQuickbooksStyles();

  const handleSelect = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
    updateData("quickBooks", value);
  };

  const handleSendInfo = () => {
    setEmailSent(true);
    setTimeout(() => {
      setShowDialog(false);
      setEmailSent(false);
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

        <RadioGroup
          value={data.quickBooks}
          onChange={handleSelect}
          options={QUICKBOOKS_OPTIONS}
          variant="card"
        />

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
            Continue
            <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
          </Button>
        </Box>
      </Box>

      <Dialog open={showDialog}>
        <DialogContent sx={{ maxWidth: 448 }}>
          <DialogHeader>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <HardDrive sx={{ width: 20, height: 20, color: '#ea580c' }} />
              <DialogTitle sx={{ fontWeight: 600, fontSize: 20, color: '#111827', p: 0 }}>
                QuickBooks Integration Guide
              </DialogTitle>
            </Box>
            <DialogDescription>
              Get step-by-step instructions for connecting your QuickBooks account.
            </DialogDescription>
          </DialogHeader>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Box className={classes.infoBox}>
              <Typography 
                variant="h6" 
                component="h4" 
                sx={{ 
                  fontWeight: 500, // font-medium
                  color: '#9a3412', // text-orange-900
                  fontSize: '16px',
                  lineHeight: '24px',
                  mb: 2
                }}
              >
                What you'll get:
              </Typography>
              <Box className={classes.infoList}>
                <Typography className={classes.infoListItem}>• Step-by-step connection guide</Typography>
                <Typography className={classes.infoListItem}>• Best practices for inventory sync</Typography>
                <Typography className={classes.infoListItem}>• Troubleshooting tips</Typography>
                <Typography className={classes.infoListItem}>• Support contact information</Typography>
              </Box>
            </Box>

            <Typography 
              variant="body2" 
              sx={{ 
                color: '#4b5563', // text-gray-600
                fontSize: '14px', // text-sm = 14px
                lineHeight: '20px'
              }}
            >
              We'll send you a comprehensive guide with screenshots and detailed instructions.
            </Typography>
          </Box>

          <DialogFooter sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', sm: 'row' }, justifyContent: { sm: 'flex-end' }, gap: 3 }}>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Maybe Later
            </Button>
            <Button className={classes.dialogButton} onClick={handleSendInfo}>
              {emailSent ? (
                <>
                  <Calendar sx={{ mr: 2, width: 16, height: 16 }} />
                  Sent!
                </>
              ) : (
                <>
                  <Mail sx={{ mr: 2, width: 16, height: 16 }} />
                  Send Guide
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuickBooksStep;
