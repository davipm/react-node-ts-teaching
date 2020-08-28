import styled from "styled-components";

export const Container = styled.div`
  position: revert;

  & + & {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
  }

  select {
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    outline: 0;
  }

  :focus-within::after {
    position: absolute;
    right: 1.6rem;
    left: 1.6rem;
    bottom: 0;
    width: calc(100% - 3.2rem);
    height: 2px;
    content: "";
    background-color: var(--color-primary-light);
  }
`;
