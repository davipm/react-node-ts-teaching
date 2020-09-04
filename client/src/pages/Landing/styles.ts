import styled, { css } from "styled-components/macro";

interface ButtonProps {
  variant: string;
}

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: var(--color-text-in-primary);
  background-color: var(--color-primary);
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }

  img {
    height: 10rem;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 10.4rem;
    border-radius: 0.8rem;
    font: 700 2rem Archivo;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color 0.2s;

    :first-child {
      margin-right: 1.6rem;
    }

    img {
      margin-right: 1.4rem;
    }
  }
`;

export const Button = styled.a<ButtonProps>`
  ${({ variant }) =>
    variant === "study"
      ? css`
          background-color: var(--color-primary-lighter);
          :hover {
            background-color: var(--color-primary-light);
          }
        `
      : variant === "classes"
      ? css`
          background-color: var(--color-secundary);
          :hover {
            background-color: var(--color-secundary-dark);
          }
        `
      : null}
`;

export const TotalConnections = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;

  img {
    margin-left: 0.8rem;
  }
`;

export const LandingContainer = styled.div`
  @media (min-width: 1100px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 350px 1fr;
    grid-template-areas:
      "logo hero hero"
      "buttons buttons total";
    max-width: 1100px;

    ${LogoContainer} {
      grid-area: logo;
      align-self: center;
      text-align: left;
      margin: 0;

      h2 {
        text-align: initial;
        font-size: 3.6rem;
      }

      img {
        height: 100%;
      }
    }

    ${HeroImage} {
      grid-area: hero;
      justify-self: end;
    }

    ${ButtonsContainer} {
      grid-area: buttons;
      justify-content: flex-start;

      a {
        font-size: 2.4rem;
      }
    }

    ${TotalConnections} {
      grid-area: total;
      justify-self: end;
    }
  }
`;
