import styled, { css } from "styled-components";

export const BaseContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 0 1.5rem;
  margin: 0 auto;
`

export const BaseButton = styled.button<{
  variant?: 'secondary'
}>`${s => css`
  height: 3.125rem;
  border: 1px solid ${s.theme["green-500"]};
  background: ${s.theme["green-500"]};
  color: ${s.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${s.theme["green-700"]};
    border: 1px solid ${s.theme["green-700"]};
  }

  ${s.variant === 'secondary' && css`
    background: none;
    border: 1px solid ${s.theme["green-300"]};
    color: ${s.theme["green-300"]};

    &:hover {
      color: ${s.theme.white};
      background: ${s.theme["green-500"]};
      border: 1px solid ${s.theme["green-500"]};
    }
  `}
`}`

export const BaseInput = styled.input`${s => css`
  flex: 1;
  border-radius: 6px;
  border: 0;
  background-color: ${s.theme["gray-900"]};
  color: ${s.theme["gray-300"]};
  padding: 1rem;
  
  &::placeholder {
    color: ${s.theme["gray-500"]};
  }
`}`