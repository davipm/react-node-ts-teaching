import React, { TextareaHTMLAttributes } from "react";

import { Container } from "./styles";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

function Textarea({ name, label, ...rest }: TextareaProps) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} {...rest} />
    </Container>
  );
}

export default Textarea;
