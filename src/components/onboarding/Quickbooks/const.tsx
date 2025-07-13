import * as React from "react";
import { QuickBooksOption } from "./types";
import { Computer, DesktopWindows, Close, CalendarToday } from "@mui/icons-material";

export const QUICKBOOKS_OPTIONS: QuickBooksOption[] = [
  {
    value: "online",
    label: "Yes: QuickBooks Online",
    description: "Excellent. We'll sync seamlessly with real-time financial data.",
    icon: <Computer />,
    badge: "Most Popular",
    iconColor: "#22c55e",
    highlight: true,
  },
  {
    value: "desktop",
    label: "Yes: QuickBooks Desktop",
    description: "Desktop requires our Advanced enterprise solution for full integration.",
    icon: <DesktopWindows />,
    iconColor: "#f59e42",
  },
  {
    value: "none",
    label: "No accounting software yet",
    description: "Perfect. We'll show you our built-in financial reporting features.",
    icon: <Close />,
    iconColor: "#60a5fa",
  },
  {
    value: "planning",
    label: "Planning to use QuickBooks",
    description: "Smart choice. We'll set up the integration when you're ready.",
    icon: <CalendarToday />,
    iconColor: "#a78bfa",
  },
]; 