import styled from "styled-components/macro";

import { Container as Input } from "../../components/Input/styles";
import { Container as Select } from "../../components/Select/styles";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  main {
    width: 90%;
    margin: 3.2rem auto;
  }

  @media (min-width: 700px) {
    max-width: 100vw;

    main {
      max-width: 740px;
      margin: 0 auto;
      padding: 3.2rem 0;
    }
  }
`;

export const SearchTeachers = styled.form`
  margin-top: 3.2rem;

  @media (min-width: 700px) {
    position: absolute;
    bottom: -28px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;

    ${Input} + ${Input},
    ${Select} + ${Select} {
      margin-top: 0;
    }
  }

  label {
    color: var(--color-text-in-primary);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3.2rem;
    width: 100%;
    height: 5.6rem;
    font: 700 1.6rem Archivo;
    text-decoration: none;
    color: var(--color-button-text);
    background-color: var(--color-secundary);
    border: 0;
    outline: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: background-color 0.2s;

    :hover {
      background-color: var(--color-secundary-dark);
    }
  }
`;
