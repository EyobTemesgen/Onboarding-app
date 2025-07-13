import { SalesChannelOption } from "./types";

export const SALES_CHANNEL_OPTIONS: SalesChannelOption[] = [
  { 
    id: "ecommerce", 
    label: "Shopify or other ecommerce site", 
    description: "We'll sync your online store automatically" 
  },
  { 
    id: "marketplaces", 
    label: "Amazon, Walmart, or other marketplaces", 
    description: "Connect and control pricing across platforms" 
  },
  { 
    id: "b2b", 
    label: "B2B (email, phone, portal orders)", 
    description: "Streamline wholesale and direct sales" 
  },
  { 
    id: "manual", 
    label: "Manual orders (trade shows, spreadsheets)", 
    description: "Digitize and automate your current process" 
  },
  { 
    id: "retail", 
    label: "Retail or POS", 
    description: "Sync in-store and online inventory" 
  },
  { 
    id: "not_selling", 
    label: "Not selling yet", 
    description: "We'll prepare you for launch day" 
  },
]; 