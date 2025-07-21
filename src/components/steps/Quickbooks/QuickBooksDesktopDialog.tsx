import { Dialog, DialogContent, DialogTitle, DialogActions, IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import { Typography, Box, Button } from "@mui/material";

interface QuickBooksDesktopDialogProps {
  open: boolean;
  onClose: () => void;
  onSendInfo: () => void;
  emailSent: boolean;
  icon: React.ReactNode;
}

export const QuickBooksDesktopDialog = ({
  open,
  onClose,
  onSendInfo,
  emailSent,
  icon
}: QuickBooksDesktopDialogProps) => {
  return (
    <Dialog open={open}>
      <DialogContent sx={{ maxWidth: 448 }}>
        <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {icon}
          QuickBooks Desktop Integration
          <IconButton
            aria-label="close"
            onClick={onClose}
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
          <Button variant="outlined" onClick={onClose}>
            Maybe Later
          </Button>
          <Button onClick={onSendInfo} sx={{ background: '#ea580c', color: '#fff', '&:hover': { background: '#c2410c' } }}>
            <Mail sx={{ mr: 2, width: 16, height: 16 }} />
            {emailSent ? "Sent!" : "Send Me Info"}
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default QuickBooksDesktopDialog;
