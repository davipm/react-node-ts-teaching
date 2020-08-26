import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

function Input({ name, label, ...rest }: InputProps) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </Container>
  );
}

export default Input;
