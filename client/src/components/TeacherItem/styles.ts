import styled from "styled-components/macro";

export const Container = styled.article`
  margin-top: 2.4rem;
  overflow: hidden;
  background-color: var(--color-box-base);
  border: 1px solid var(--color-line-in-white);
  border-radius: 0.8rem;

  header {
    display: flex;
    align-items: center;
    padding: 3.2rem 2rem;

    @media (min-width: 700px) {
      padding: 3.2rem;
    }

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      strong {
        display: block;
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
      }

      span {
        display: block;
        font-size: 1.6rem;
        margin-top: 0.4rem;
      }
    }
  }

  > p {
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;

    @media (min-width: 700px) {
      padding: 0 3.2rem;
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.2rem;
    padding: 3.2rem 2rem;
    background-color: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    @media (min-width: 700px) {
      padding: 3.2rem;

      button {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;

        img {
          margin-right: 1.6rem;
        }
      }
    }

    p strong {
      display: block;
      font-size: 1.6rem;
      color: var(--color-primary);

      @media (min-width: 700px) {
        display: initial;
        margin-left: 1.6rem;
      }
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 20rem;
      height: 5.6rem;
      font: 700 1.6rem Archivo;
      color: var(--color-button-text);
      text-decoration: none;
      background-color: var(--color-secundary);
      border: 0;
      border-radius: 0.8rem;
      cursor: pointer;
      transition: 0.2s;

      :hover {
        background-color: var(--color-secundary-dark);
      }
    }
  }
`;
