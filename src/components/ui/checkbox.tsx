import * as React from "react";
import { Checkbox as MuiCheckbox, CheckboxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCheckbox = styled(MuiCheckbox)<CheckboxProps>(({ theme }) => ({
  padding: 0,
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <StyledCheckbox
      ref={ref}
      className={className}
      {...props}
    />
  )
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
