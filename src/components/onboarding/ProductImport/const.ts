import { SampleProduct } from "./types";

export const SAMPLE_PRODUCTS: SampleProduct[] = [
  { sku: "WID-001", name: "Wireless Headphones", qty: 150 },
  { sku: "LTP-256", name: "Gaming Laptop", qty: 25 },
  { sku: "MUG-BLU", name: "Coffee Mug - Blue", qty: 200 }
];

// Export a serializable array for import methods
export const IMPORT_METHODS = [
  {
    key: "csv",
    icon: "upload",
    iconColor: "#2563eb",
    iconBg: "#dbeafe",
    borderColor: "#3b82f6",
    bgColor: "#3b82f620",
    title: "Upload CSV File",
    description: "Import your existing product list from a spreadsheet or export file.",
    infoIcon: "filetext",
    infoText: "SKU, Name, Quantity format",
    tooltipKey: "csvTooltip",
  },
  {
    key: "quickbooks",
    icon: "zap",
    iconColor: "#16a34a",
    iconBg: "#dcfce7",
    borderColor: "#16a34a",
    bgColor: "#16a34a20",
    title: "Connect to QuickBooks",
    description: "Automatically sync your existing inventory data and keep everything up to date.",
    infoIcon: "zap",
    infoText: "Real-time sync enabled",
    tooltipKey: "quickbooksTooltip",
  },
  {
    key: "sample",
    icon: "package",
    iconColor: "#9333ea",
    iconBg: "#f3e8ff",
    borderColor: "#9333ea",
    bgColor: "#9333ea20",
    title: "Start with Sample Data",
    description: "Explore the system with pre-loaded sample products. Perfect for getting started quickly.",
    infoIcon: "package",
    infoText: "Ready to explore immediately",
    tooltipKey: "sampleTooltip",
  },
]; 