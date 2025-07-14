import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ArrowForward as ArrowRight, 
  ArrowBack as ArrowLeft, 
  CloudUpload as Upload, 
  FlashOn as Zap, 
  CheckCircle as Check, 
  Description as FileText, 
  Help as HelpCircle, 
  Inventory as Package 
} from "@mui/icons-material";
import { Typography, Box, Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from "@mui/material";
import { StepProps } from "../types";
import { styled } from "@mui/material/styles";
import { useProductImportStyles } from "./styled";
import { SAMPLE_PRODUCTS } from "./const";

const StyledTooltip = styled(MuiTooltip)<MuiTooltipProps>(({ theme }) => ({
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

const Tooltip = StyledTooltip;

const TooltipTrigger = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
);

const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, ...props }, ref) => (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
);

const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

const ProductImportStep = ({ data, updateData, onNext, onPrev }: StepProps) => {
  const [importMethod, setImportMethod] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState(false);
  const classes = useProductImportStyles();

  const handleMethodSelect = (method: string) => {
    setImportMethod(method);
    updateData("productImport", method);
    
    // Simulate import process
    setTimeout(() => {
      setShowSuccess(true);
    }, 1500);
  };

  if (showSuccess) {
    return (
      <Box className={classes.successContainer}>
        <Box className={classes.successIcon}>
          <Check sx={{ width: 32, height: 32, color: '#16a34a' }} />
        </Box>
        
        <Box className={classes.successContent}>
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
            {importMethod === "csv" ? "Products Imported Successfully!" : 
             importMethod === "quickbooks" ? "QuickBooks Connected!" : 
             "Sample Data Loaded!"}
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#475569', 
              fontSize: '16px',
              lineHeight: '24px'
            }}
          >
            {importMethod === "csv" 
              ? "Your product catalog is now loaded and ready to sync across channels."
              : importMethod === "quickbooks"
              ? "Your QuickBooks inventory data is now syncing automatically."
              : "You're all set with sample products to explore the system."
            }
          </Typography>
        </Box>

        <Box className={classes.previewBox}>
          <Typography 
            variant="h6" 
            component="h3" 
            sx={{ 
              fontWeight: 600, 
              color: '#0f172a', 
              fontSize: '16px',
              lineHeight: '24px',
              mb: 3
            }}
          >
            {importMethod === "sample" ? "Sample products loaded:" : "Preview of imported products:"}
          </Typography>
          <Box className={classes.previewList}>
            {SAMPLE_PRODUCTS.map((product, index) => (
              <Box key={index} className={classes.previewItem}>
                <Typography sx={{ fontWeight: 500, fontSize: '14px' }}>
                  {product.sku}
                </Typography>
                <Typography sx={{ color: '#475569', fontSize: '14px' }}>
                  {product.name}
                </Typography>
                <Typography sx={{ color: '#16a34a', fontWeight: 500, fontSize: '14px' }}>
                  {product.qty} in stock
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={classes.buttonContainer}>
          <Button variant="outline" onClick={onPrev} className={classes.backButton}>
            <ArrowLeft sx={{ mr: 2, width: 16, height: 16 }} />
            Back
          </Button>
          <Button onClick={onNext} className={classes.nextButton}>
            Continue Setup
            <ArrowRight sx={{ ml: 2, width: 16, height: 16 }} />
          </Button>
        </Box>
      </Box>
    );
  }

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
          Bring In Your Products, Your Way
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            color: '#475569', 
            fontSize: '16px',
            lineHeight: '24px'
          }}
        >
          Choose the method that works best for you. You can always add more products later.
        </Typography>
      </Box>

      <Box className={classes.methodGrid}>
        <Box 
          className={classes.methodCard}
          onClick={() => handleMethodSelect("csv")}
          sx={{
            '&:hover': {
              borderColor: '#3b82f6',
              backgroundColor: '#3b82f620',
            }
          }}
        >
          <Box className={classes.methodContent}>
            <Box 
              className={classes.methodIcon}
              sx={{ backgroundColor: '#dbeafe' }}
            >
              <Upload sx={{ color: '#2563eb' }} />
            </Box>
            <div>
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#0f172a', 
                  fontSize: '16px',
                  lineHeight: '24px',
                  mb: 2
                }}
              >
                Upload CSV File
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#475569', 
                  fontSize: '14px', 
                  lineHeight: '20px'
                }}
              >
                Import your existing product list from a spreadsheet or export file.
              </Typography>
            </div>
            <Box className={classes.methodInfo}>
              <FileText sx={{ width: 12, height: 12 }} />
              <Typography sx={{ fontSize: '12px' }}>SKU, Name, Quantity format</Typography>
              <TooltipProvider>
  <Tooltip title={""}>
    <>
      <TooltipTrigger>
        <HelpCircle sx={{ width: 12, height: 12 }} />
      </TooltipTrigger>
      <TooltipContent>
        <Typography sx={{ fontSize: '12px' }}>
          Required columns: SKU, Product Name, Quantity<br />Optional: Price, Description, Category
        </Typography>
      </TooltipContent>
    </>
  </Tooltip>
</TooltipProvider>

            </Box>
          </Box>
        </Box>

        <Box 
          className={classes.methodCard}
          onClick={() => handleMethodSelect("quickbooks")}
          sx={{
            '&:hover': {
              borderColor: '#16a34a',
              backgroundColor: '#16a34a20',
            }
          }}
        >
          <Box className={classes.methodContent}>
            <Box 
              className={classes.methodIcon}
              sx={{ backgroundColor: '#dcfce7' }}
            >
              <Zap sx={{ color: '#16a34a' }} />
            </Box>
            <div>
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#0f172a', 
                  fontSize: '16px',
                  lineHeight: '24px',
                  mb: 2
                }}
              >
                Connect to QuickBooks
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#475569', 
                  fontSize: '14px', 
                  lineHeight: '20px'
                }}
              >
                Automatically sync your existing inventory data and keep everything up to date.
              </Typography>
            </div>
            <Box className={classes.methodInfo}>
              <Zap sx={{ width: 12, height: 12 }} />
              <Typography sx={{ fontSize: '12px' }}>Real-time sync enabled</Typography>
              <TooltipProvider>
  <Tooltip title={""}>
    <>
      <TooltipTrigger>
        <HelpCircle sx={{ width: 12, height: 12 }} />
      </TooltipTrigger>
      <TooltipContent>
        <Typography sx={{ fontSize: '12px' }}>
          Requires QuickBooks Online with inventory tracking enabled
        </Typography>
      </TooltipContent>
    </>
  </Tooltip>
</TooltipProvider>

            </Box>
          </Box>
        </Box>

        <Box 
          className={classes.methodCard}
          onClick={() => handleMethodSelect("sample")}
          sx={{
            '&:hover': {
              borderColor: '#9333ea',
              backgroundColor: '#9333ea20',
            }
          }}
        >
          <Box className={classes.methodContent}>
            <Box 
              className={classes.methodIcon}
              sx={{ backgroundColor: '#f3e8ff' }}
            >
              <Package sx={{ color: '#9333ea' }} />
            </Box>
            <div>
              <Typography 
                variant="h6" 
                component="h3" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#0f172a', 
                  fontSize: '16px',
                  lineHeight: '24px',
                  mb: 2
                }}
              >
                Start with Sample Data
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#475569', 
                  fontSize: '14px', 
                  lineHeight: '20px'
                }}
              >
                Explore the system with pre-loaded sample products. Perfect for getting started quickly.
              </Typography>
            </div>
            <Box className={classes.methodInfo}>
              <Package sx={{ width: 12, height: 12 }} />
              <Typography sx={{ fontSize: '12px' }}>Ready to explore immediately</Typography>
              <TooltipProvider>
  <Tooltip title={""}>
    <>
      <TooltipTrigger>
        <HelpCircle sx={{ width: 12, height: 12 }} />
      </TooltipTrigger>
      <TooltipContent>
        <Typography sx={{ fontSize: '12px' }}>
          Includes sample SKUs, names, and quantities<br />You can replace with real data anytime
        </Typography>
      </TooltipContent>
    </>
  </Tooltip>
</TooltipProvider>

            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.buttonContainer}>
        <Button variant="outline" onClick={onPrev} className={classes.backButton}>
          <ArrowLeft sx={{ mr: 2, width: 16, height: 16 }} />
          Back
        </Button>
        <Typography className={classes.helperText}>Select an import method to continue</Typography>
      </Box>
    </Box>
  );
};

export default ProductImportStep;
