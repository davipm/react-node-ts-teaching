import styled from "styled-components/macro";
import { HeaderContent } from "../../components/PageHeader/styles";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;

  ${HeaderContent} {
    margin-bottom: 6.4rem;
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
      padding: 0 2.4rem;
      border: 0;

      & + & {
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
      }
    }
  }
`;

export const ScheduleItem = styled.div``;
