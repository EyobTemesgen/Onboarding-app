import * as React from "react";
import { 
  DialogContentProps as MuiDialogContentProps,
  DialogActionsProps as MuiDialogActionsProps,
  TypographyProps 
} from "@mui/material";

export interface DialogContentProps extends MuiDialogContentProps {
  onClose?: () => void;
}

export interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface DialogFooterProps extends MuiDialogActionsProps {}

export interface DialogTitleProps extends TypographyProps {}

export interface DialogDescriptionProps extends TypographyProps {}

export interface DialogPortalProps {
  children: React.ReactNode;
}

export interface DialogOverlayProps {}

export interface DialogCloseProps {
  children: React.ReactNode;
  [key: string]: any;
}

export interface DialogTriggerProps {
  children: React.ReactNode;
  [key: string]: any;
} 