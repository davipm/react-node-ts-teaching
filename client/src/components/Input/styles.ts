import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;

  & + & {
    margin-top: 1.4rem;
  }

  label {
    font-size: 1.4rem;
  }

  input {
    width: 100%;
    height: 5.6rem;
    font: 1.6rem "Archivo", sans-serif;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;

    :focus-within::after {
      position: absolute;
      width: calc(100% - 3.2rem);
      height: 2px;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;
      content: "";
      background-color: var(--color-primary-light);
    }
  }
`;
