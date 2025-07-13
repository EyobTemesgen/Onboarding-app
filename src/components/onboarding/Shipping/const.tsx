import * as React from "react";
import { ShippingLocationOption } from "./types";

export const SHIPPING_LOCATION_OPTIONS: ShippingLocationOption[] = [
  { 
    value: "home", 
    label: <><strong>Home-based business</strong><br /><span style={{fontWeight:400}}>We'll set up a simple, efficient fulfillment process.</span></>
  },
  { 
    value: "warehouse", 
    label: <><strong>Warehouse or storage facility</strong><br /><span style={{fontWeight:400}}>Perfect for scaling operations and managing larger inventories.</span></>
  },
  { 
    value: "retail", 
    label: <><strong>Retail store with backroom</strong><br /><span style={{fontWeight:400}}>We'll optimize your existing space for both sales and fulfillment.</span></>
  },
  { 
    value: "third_party", 
    label: <><strong>Third-party fulfillment</strong><br /><span style={{fontWeight:400}}>We'll integrate with your fulfillment partners for seamless operations.</span></>
  },
  { 
    value: "multiple", 
    label: <><strong>Multiple locations</strong><br /><span style={{fontWeight:400}}>We'll coordinate inventory across all your locations efficiently.</span></>
  }
]; 