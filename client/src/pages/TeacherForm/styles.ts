import styled from "styled-components/macro";
import { HeaderContent } from "../../components/PageHeader/styles";
import { Container as Input } from "../../components/Input/styles";
import { Container as Textarea } from "../../components/Textarea/styles";
import { Container as Select } from "../../components/Select/styles";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  @media (min-width: 700px) {
    max-width: 100vw;
  }

  ${HeaderContent} {
    margin-bottom: 6.4rem;

    @media (min-width: 700px) {
      margin-bottom: 0;
    }
  }

  main {
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;
    background-color: var(--color-box-base);
    overflow: hidden;

    fieldset {
      margin: 0;
      padding: 0 2.4rem;
      border: 0;

      @media (min-width: 700px) {
        padding: 0 6.4rem;
      }

      + fieldset {
        margin-top: 6.4rem;
      }

      legend {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding-bottom: 1.6rem;
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        border-bottom: 1px solid var(--color-line-in-white);

        button {
          font: 700 1.6rem Archivo;
          color: var(--color-primary);
          background: none;
          border: 0;
          transition: color 0.2s;
          cursor: pointer;

          :hover {
            color: var(--color-primary-dark);
          }
        }
      }

      ${Input} + ${Textarea},
      ${Select} + ${Input} {
        margin-top: 2.4rem;
      }
    }

    label {
      color: var(--color-text-complement);
    }

    footer {
      padding: 4rem 2.4rem;
      background-color: var(--color-box-footer);
      border-top: 1px solid var(--color-line-in-white);
      margin-top: 6.4rem;

      @media (min-width: 700px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 4rem 6.4rem;
      }

      p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--color-text-complement);

        @media (min-width: 700px) {
          justify-content: space-between;
        }

        img {
          margin-right: 2rem;
        }
      }

      button {
        width: 100%;
        height: 5.6rem;
        background-color: var(--color-secundary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem Archivo;
        display: flex;
        justify-content: center;
        text-decoration: none;
        transition: background-color 0.2s;
        margin-top: 3.2rem;

        @media (min-width: 700px) {
          width: 20rem;
          margin-bottom: 0;
        }

        :hover {
          background-color: var(--color-secundary-dark);
        }
      }
    }
  }
`;

export const ScheduleItem = styled.div`
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    column-gap: 1.6rem;

    ${Input} {
      margin-top: 0 !important;
    }
  }
`;
