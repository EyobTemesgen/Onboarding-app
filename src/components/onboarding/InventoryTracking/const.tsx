import * as React from "react";
import { InventoryTrackingOption } from "./types";

export const INVENTORY_TRACKING_OPTIONS: InventoryTrackingOption[] = [
  { 
    value: "none", 
    label: <><strong>We don't track inventory yet</strong><br /><span style={{fontWeight:400}}>Perfect. We'll build your system from the ground up.</span></> 
  },
  { 
    value: "spreadsheets", 
    label: <><strong>Spreadsheets</strong><br /><span style={{fontWeight:400}}>Time to eliminate manual errors and save hours each week.</span></> 
  },
  { 
    value: "quickbooks", 
    label: <><strong>QuickBooks</strong><br /><span style={{fontWeight:400}}>Excellent. We'll sync seamlessly with your existing setup.</span></> 
  },
  { 
    value: "other_tool", 
    label: <><strong>Another inventory tool</strong><br /><span style={{fontWeight:400}}>We'll help you migrate and upgrade your workflow.</span></> 
  },
  { 
    value: "fishbowl", 
    label: <><strong>Fishbowl Classic or other ERP</strong><br /><span style={{fontWeight:400}}>Ready to modernize? We specialize in smooth transitions.</span></> 
  }
]; 