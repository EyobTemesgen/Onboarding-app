import { FinCheckbox } from "@f3358/fb-design-library/checkbox";
import React from 'react';
import { createComponent } from '@lit/react';

export const Checkbox = createComponent({
  tagName: 'fin-checkbox',
  elementClass: FinCheckbox,
  react: React,
  events: {
    onChange: 'fin-change',
  },
});