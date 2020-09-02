import React, { SelectHTMLAttributes } from "react";

import { Container } from "./styles";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
}

function Select({ name, label, options, ...rest }: SelectProps) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          Select an option
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
}

export default Select;
