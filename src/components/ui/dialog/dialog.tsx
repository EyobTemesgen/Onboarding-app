import * as React from "react";
import {
  Dialog as MuiDialog,
  IconButton,
  Typography,
  Box
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import {
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogPortalProps,
  DialogOverlayProps,
  DialogCloseProps,
  DialogTriggerProps
} from "./types";
import {
  StyledDialogContent,
  StyledDialogHeader,
  StyledDialogFooter,
  StyledDialogTitle,
  StyledDialogDescription,
  CloseButton,
  DIALOG_STYLES
} from "./styled";

const Dialog = MuiDialog;

const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className, children, onClose, ...props }, ref) => (
    <StyledDialogContent
      ref={ref}
      className={className}
      {...props}
    >
      {children}
      <CloseButton
        aria-label="close"
        onClick={onClose}
      >
        <CloseIcon />
      </CloseButton>
    </StyledDialogContent>
  )
);

const DialogHeader = React.forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ className, ...props }, ref) => (
    <StyledDialogHeader
      ref={ref}
      className={className}
      {...props}
    />
  )
);

const DialogFooter = React.forwardRef<HTMLDivElement, DialogFooterProps>(
  ({ className, ...props }, ref) => (
    <StyledDialogFooter
      ref={ref}
      className={className}
      {...props}
    />
  )
);

const DialogTitle = React.forwardRef<HTMLHeadingElement, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <StyledDialogTitle
      ref={ref}
      className={className}
      {...props}
    />
  )
);

const DialogDescription = React.forwardRef<HTMLParagraphElement, DialogDescriptionProps>(
  ({ className, ...props }, ref) => (
    <StyledDialogDescription
      ref={ref}
      className={className}
      {...props}
    />
  )
);

// Re-export for compatibility
const DialogPortal = ({ children }: DialogPortalProps) => <>{children}</>;
const DialogOverlay = ({}: DialogOverlayProps) => null;
const DialogClose = ({ children, ...props }: DialogCloseProps) => <IconButton {...props}>{children}</IconButton>;
const DialogTrigger = ({ children, ...props }: DialogTriggerProps) => <div {...props}>{children}</div>;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
