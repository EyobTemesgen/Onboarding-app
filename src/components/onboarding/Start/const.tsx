import * as React from "react";
import { TrendingUp, FlashOn as Zap, Inventory as Package } from "@mui/icons-material";
import { WelcomeFeature } from "./types";

export const WELCOME_FEATURES: WelcomeFeature[] = [
  {
    icon: <TrendingUp />,
    title: "Multi-Channel Control",
    description: "Sync inventory across all your sales channels automatically",
    iconBackgroundColor: "#d1fae5",
    iconColor: "#059669"
  },
  {
    icon: <Zap />,
    title: "Real-Time Sync",
    description: "Never oversell again with instant inventory updates",
    iconBackgroundColor: "#e0f2fe",
    iconColor: "#0284c7"
  },
  {
    icon: <Package />,
    title: "Workflow Automation",
    description: "Streamline operations from order to fulfillment",
    iconBackgroundColor: "#f3e8ff",
    iconColor: "#7c3aed"
  }
]; 