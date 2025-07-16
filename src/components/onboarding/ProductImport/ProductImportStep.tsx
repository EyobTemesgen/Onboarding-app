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
import { useProductImportStyles } from "./styled";
import { SAMPLE_PRODUCTS, IMPORT_METHODS } from "./const";
import { StyledTooltip } from "./styled";

const Tooltip = StyledTooltip;

const iconMap = {
  upload: (color: string) => <Upload sx={{ color }} />,
  zap: (color: string) => <Zap sx={{ color }} />,
  package: (color: string) => <Package sx={{ color }} />,
  filetext: (color: string) => <FileText sx={{ color }} />,
};

const infoIconMap = {
  filetext: <FileText sx={{ width: 12, height: 12 }} />,
  zap: <Zap sx={{ width: 12, height: 12 }} />,
  package: <Package sx={{ width: 12, height: 12 }} />,
};

const tooltipMap = {
  csvTooltip: (
    <Typography sx={{ fontSize: "12px" }}>
      Required columns: SKU, Product Name, Quantity<br />Optional: Price, Description, Category
    </Typography>
  ),
  quickbooksTooltip: (
    <Typography sx={{ fontSize: "12px" }}>
      Requires QuickBooks Online with inventory tracking enabled
    </Typography>
  ),
  sampleTooltip: (
    <Typography sx={{ fontSize: "12px" }}>
      Includes sample SKUs, names, and quantities<br />You can replace with real data anytime
    </Typography>
  ),
};

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
          <Button variant="secondary" size="medium" onClick={onPrev}>
            <ArrowLeft sx={{ mr: 2, width: 16, height: 16 }} />
            Back
          </Button>
          <Button variant="primary" size="medium" onClick={onNext}>
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
        {IMPORT_METHODS.map(method => (
          <Box
            key={method.key}
            className={classes.methodCard}
            onClick={() => handleMethodSelect(method.key)}
            sx={{
              '&:hover': {
                borderColor: method.borderColor,
                // backgroundColor removed to only highlight border
              }
            }}
          >
            <Box className={classes.methodContent}>
              <Box className={classes.methodIcon} sx={{ backgroundColor: method.iconBg }}>
                {iconMap[method.icon]?.(method.iconColor)}
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
                  {method.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: '#475569', 
                    fontSize: '14px', 
                    lineHeight: '20px'
                  }}
                >
                  {method.description}
                </Typography>
              </div>
              <Box className={classes.methodInfo}>
                {infoIconMap[method.infoIcon]}
                <Typography sx={{ fontSize: '12px' }}>{method.infoText}</Typography>
                <Tooltip
                  title={tooltipMap[method.tooltipKey]}
                >
                  <HelpCircle sx={{ width: 12, height: 12, ml: 0.5 }} />
                </Tooltip>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <Box className={classes.buttonContainer}>
        <Button variant="secondary" size="medium" onClick={onPrev}>
          <ArrowLeft sx={{ mr: 2, width: 16, height: 16 }} />
          Back
        </Button>
        <Typography className={classes.helperText}>Select an import method to continue</Typography>
      </Box>
    </Box>
  );
};

export default ProductImportStep;
