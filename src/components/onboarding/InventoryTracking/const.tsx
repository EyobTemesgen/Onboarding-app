
import { InventoryTrackingOption } from "./types";
import { Inventory, Business as QuickBooksIcon, LocalShipping as Truck, Schedule as Clock } from "@mui/icons-material";

export const INVENTORY_TRACKING_OPTIONS: InventoryTrackingOption[] = [
  { 
    value: "none", 
    label: "We don't track inventory yet\nPerfect. We'll build your system from the ground up.",
    icon: <Inventory />
  },
  { 
    value: "spreadsheets", 
    label: "Spreadsheets\nTime to eliminate manual errors and save hours each week.",
    icon: <Truck />
  },  
  { 
    value: "quickbooks", 
    label: "QuickBooks\nExcellent. We'll sync seamlessly with your existing setup.",
    icon: <QuickBooksIcon />
  },
  { 
    value: "other_tool", 
    label: "Another inventory tool\nWe'll help you migrate and upgrade your workflow.",
    icon: <Truck />
  },
  { 
    value: "fishbowl", 
    label: "Fishbowl Classic or other ERP\nReady to modernize? We specialize in smooth transitions.",
    icon: <Clock />
  }
];