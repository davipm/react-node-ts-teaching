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
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 3.2rem;
    padding: 3.2rem 2rem;
    background-color: var(--color-box-footer);
    border: 1px solid var(--color-line-in-white);

    p strong {
      display: block;
      font-size: 1.6rem;
      color: var(--color-primary);
    }
  }
`;
