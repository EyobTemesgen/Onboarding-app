import { useState } from "react";
import { CloudUpload, FlashOn, CheckCircle, Inventory, Description, Help } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { useProductImportStyles } from "./styled";
import OnboardingStepLayout from '../OnboardingFlow/OnboardingStepLayout';

const SAMPLE_PRODUCTS = [
  { sku: "WID-001", name: "Wireless Headphones", qty: 150 },
  { sku: "LTP-256", name: "Gaming Laptop", qty: 25 },
  { sku: "MUG-BLU", name: "Coffee Mug - Blue", qty: 200 },
];

const IMPORT_METHODS = [
  {
    key: "csv",
    icon: "upload",
    title: "Upload CSV File",
    description: "Import your existing product list from a spreadsheet or export file.",
    infoText: "SKU, Name, Quantity format",
    infoIcon: "filetext",
  },
  {
    key: "quickbooks",
    icon: "zap",
    title: "Connect to QuickBooks",
    description: "Automatically sync your existing inventory data and keep everything up to date.",
    infoText: "Real-time sync enabled",
    infoIcon: "zap",
  },
  {
    key: "sample",
    icon: "package",
    title: "Start with Sample Data",
    description: "Explore the system with pre-loaded sample products. Perfect for getting started quickly.",
    infoText: "Ready to explore immediately",
    infoIcon: "package",
  },
];

const iconMap = {
  upload: <CloudUpload sx={{ color: '#2563eb' }} />,
  zap: <FlashOn sx={{ color: '#16a34a' }} />,
  package: <Inventory sx={{ color: '#9333ea' }} />,
};

const infoIconMap = {
  filetext: <Description sx={{ width: 12, height: 12, color: '#64748b' }} />,
  zap: <FlashOn sx={{ width: 12, height: 12, color: '#64748b' }} />,
  package: <Inventory sx={{ width: 12, height: 12, color: '#64748b' }} />,
};

type StepProps = {
  onboardingData: unknown;
  setOnboardingData: (fn: unknown) => void;
  setCurrentStep: (fn: unknown) => void;
};

export default function ProductImportStep({ onboardingData, setOnboardingData, setCurrentStep }: StepProps) {
  const [importMethod, setImportMethod] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const classes = useProductImportStyles();
  const handleMethodSelect = (method) => {
    setImportMethod(method);
    setOnboardingData(prev => ({ ...prev, productImport: method }));
    setTimeout(() => setShowSuccess(true), 1500);
  };
  const canProceed = !!importMethod;
  const getSuccessMessage = () => {
    switch (importMethod) {
      case "csv":
        return {
          title: "Products Imported Successfully!",
          description: "Your product catalog is now loaded and ready to sync across channels.",
        };
      case "quickbooks":
        return {
          title: "QuickBooks Connected!",
          description: "Your QuickBooks inventory data is now syncing automatically.",
        };
      default:
        return {
          title: "Sample Data Loaded!",
          description: "You're all set with sample products to explore the system.",
        };
    }
  };
  if (showSuccess) {
    const { title, description } = getSuccessMessage();
    return (
      <OnboardingStepLayout
        title={title}
        subtitle={description}
        onNext={() => setCurrentStep((step) => step + 1)}
        onBack={() => setCurrentStep((step) => step - 1)}
        nextLabel="Continue Setup"
        hideComplete
      >
        <Box className={classes.previewBox}>
          <Typography variant="h6" component="h3" className={classes.previewTitleStyle}>
            {importMethod === "sample" ? "Sample products loaded:" : "Preview of imported products:"}
          </Typography>
          <Box className={classes.previewList}>
            {SAMPLE_PRODUCTS.map((product) => (
              <Box key={product.sku} className={classes.previewItem}>
                <Typography className={classes.skuStyle}>{product.sku}</Typography>
                <Typography className={classes.nameStyle}>{product.name}</Typography>
                <Typography className={classes.qtyStyle}>{`${product.qty} in stock`}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </OnboardingStepLayout>
    );
  }
  return (
    <OnboardingStepLayout
      title="Bring In Your Products, Your Way"
      subtitle="Choose the method that works best for you. You can always add more products later."
      onNext={() => setCurrentStep((step) => step + 1)}
      onBack={() => setCurrentStep((step) => step - 1)}
      nextLabel="Continue Setup"
      disableNext={!canProceed}
      hideComplete
      hideNext
    >
      <Box className={classes.methodGrid}>
        {IMPORT_METHODS.map(({ key, icon, title, description, infoText, infoIcon }) => (
          <Box key={key} className={classes.methodCard} onClick={() => handleMethodSelect(key)}>
            <Box className={classes.methodContent}>
              <Box 
                className={classes.methodIcon} 
                sx={{ 
                  backgroundColor: key === 'csv' ? '#dbeafe' : 
                                key === 'quickbooks' ? '#dcfce7' : 
                                '#f3e8ff'
                }}
              >
                {iconMap[icon]}
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '15px', lineHeight: '20px' }}>{title}</Typography>
                <Typography sx={{ color: '#64748b', fontSize: '13px', lineHeight: '18px', fontWeight: 400 }}>{description}</Typography>
              </Box>
              <Box className={classes.methodInfo}>
                {infoIconMap[infoIcon]}
                <Typography className={classes.infoTextStyle}>{infoText}</Typography>
                <Help sx={{ width: 12, height: 12, color: '#64748b', ml: 0.5 }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Typography className={classes.helperTextStyle} sx={{ mt: 2, textAlign: 'right', width: '100%' }}>Select an import method to continue</Typography>
    </OnboardingStepLayout>
  );
}