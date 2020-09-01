import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;

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
    background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png")
      var(--color-input-background) no-repeat 98% center;
    outline: 0;
    appearance: none;
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
