import styled, { css } from "styled-components";

export const BaseContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 0 1.5rem;
  margin: 0 auto;
`

export const BaseButton = styled.button`${s => css`
  height: 3.125rem;
  border: 0;
  background: ${s.theme["green-500"]};
  color: ${s.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  
  &:hover {
    background: ${s.theme["green-700"]};
    transition: background-color 0.2s;
  }
`}`