import * as React from "react";
import { Checkbox as MuiCheckbox, CheckboxProps } from "@mui/material";

const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, ref) => <MuiCheckbox ref={ref} {...props} />
);

export { Checkbox };