import { FinButton } from "@f3358/fb-design-library/button";
import React from "react";
import { createComponent } from "@lit/react";

export const Button = createComponent({
  tagName: "fin-button",
  elementClass: FinButton,
  react: React,
  events: {
    onClick: "fin-click",
  },
}); 