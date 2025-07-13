import * as React from "react";
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
  DialogContent as MuiDialogContent,
  DialogContentProps as MuiDialogContentProps,
  DialogActions as MuiDialogActions,
  DialogActionsProps as MuiDialogActionsProps,
  DialogContentText as MuiDialogContentText,
  DialogContentTextProps as MuiDialogContentTextProps,
  IconButton,
  Typography,
  TypographyProps
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const Dialog = MuiDialog;

const DialogContent = React.forwardRef<HTMLDivElement, MuiDialogContentProps>(
  ({ className, children, ...props }, ref) => (
    <MuiDialogContent
      ref={ref}
      className={className}
      {...props}
    >
      {children}
      <IconButton
        aria-label="close"
        onClick={() => props.onClose?.({} as any, 'escapeKeyDown')}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
    </MuiDialogContent>
  )
);

const DialogHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        textAlign: 'center',
        '@media (min-width: 640px)': {
          textAlign: 'left',
        },
      }}
      {...props}
    />
  )
);

const DialogFooter = React.forwardRef<HTMLDivElement, MuiDialogActionsProps>(
  ({ className, ...props }, ref) => (
    <MuiDialogActions
      ref={ref}
      className={className}
      sx={{
        flexDirection: 'column-reverse',
        '@media (min-width: 640px)': {
          flexDirection: 'row',
          justifyContent: 'flex-end',
          gap: 1,
        },
      }}
      {...props}
    />
  )
);

const DialogTitle = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <Typography
      ref={ref}
      variant="h6"
      component="h2"
      fontWeight={600}
      className={className}
      {...props}
    />
  )
);

const DialogDescription = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, ...props }, ref) => (
    <Typography
      ref={ref}
      variant="body2"
      color="text.secondary"
      className={className}
      {...props}
    />
  )
);

// Re-export for compatibility
const DialogPortal = ({ children }: { children: React.ReactNode }) => <>{children}</>;
const DialogOverlay = () => null;
const DialogClose = ({ children, ...props }: any) => <IconButton {...props}>{children}</IconButton>;
const DialogTrigger = ({ children, ...props }: any) => <div {...props}>{children}</div>;

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
