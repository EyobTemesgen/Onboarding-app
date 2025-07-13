import * as React from "react";
import { Typography } from "@mui/material";
import { CardTitleProps, CardDescriptionProps } from "./types";
import { Card, CardHeader, CardContent, CardFooter } from "./styled";

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <Typography
      ref={ref}
      variant="h5"
      component="h3"
      fontWeight={600}
      className={className}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
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
CardDescription.displayName = "CardDescription";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }; 