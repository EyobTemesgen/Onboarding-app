import * as React from "react";
import { FormLabel, FormLabelProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledLabel = styled(FormLabel)<FormLabelProps>(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 500,
  lineHeight: 1,
  '&.Mui-disabled': {
    cursor: 'not-allowed',
    opacity: 0.7,
  },
}));

const Label = React.forwardRef<HTMLLabelElement, FormLabelProps>(
  ({ className, ...props }, ref) => (
    <StyledLabel
      ref={ref}
      className={className}
      {...props}
    />
  )
);

Label.displayName = "Label";

export { Label };
