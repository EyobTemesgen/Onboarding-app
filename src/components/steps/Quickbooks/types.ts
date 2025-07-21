import * as React from "react";

export interface QuickBooksOption {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
  iconColor?: string;
  highlight?: boolean;
} 