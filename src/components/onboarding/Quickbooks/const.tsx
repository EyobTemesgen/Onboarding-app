import * as React from "react";
import { QuickBooksOption } from "./types";

export const QUICKBOOKS_OPTIONS: QuickBooksOption[] = [
  { 
    value: "yes", 
    label: <><strong>Yes, we use QuickBooks</strong><br /><span style={{fontWeight:400}}>Perfect! We'll connect your accounting and inventory seamlessly.</span></>
  },
  { 
    value: "no", 
    label: <><strong>No, we use different accounting</strong><br /><span style={{fontWeight:400}}>No problem. We'll configure the right financial integrations.</span></> 
  },
  { 
    value: "planning", 
    label: <><strong>We're planning to switch to QuickBooks</strong><br /><span style={{fontWeight:400}}>Great timing! We'll help you set up both systems together.</span></> 
  }
]; 