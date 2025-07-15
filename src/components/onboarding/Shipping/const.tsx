import * as React from "react";
import { ShippingLocationOption } from "./types";
import { Home, Business as Building2, LocalShipping as Truck, Schedule as Clock } from "@mui/icons-material";

export const SHIPPING_LOCATION_OPTIONS: ShippingLocationOption[] = [
  { 
    value: "home", 
    label: "Home-based business\nWe'll set up a simple, efficient fulfillment process.",
    icon: <Home />
  },
  { 
    value: "warehouse", 
    label: "Warehouse or storage facility\nPerfect for scaling operations and managing larger inventories.",
    icon: <Building2 />
  },
  { 
    value: "retail", 
    label: "Retail store with backroom\nWe'll optimize your existing space for both sales and fulfillment.",
    icon: <Truck />
  },
  { 
    value: "third_party", 
    label: "Third-party fulfillment\nWe'll integrate with your fulfillment partners for seamless operations.",
    icon: <Clock />
  },
  { 
    value: "multiple", 
    label: "Multiple locations\nWe'll coordinate inventory across all your locations efficiently.",
    icon: <Truck />
  }
];