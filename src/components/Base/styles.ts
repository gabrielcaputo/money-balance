import styled, { css } from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const BaseContainer = styled.div`
  width: 100%;
  max-width: 70rem;
  padding: 0 1.5rem;
  margin: 0 auto;
`

interface BaseButtonProps {
  variant?: 'secondary' | 'radio'
}

export const BaseButtonStyle = css`${s => css`
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
`}`

export const BaseButton = styled.button<BaseButtonProps>`${s => css`
  ${BaseButtonStyle}

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

export const BaseRadio = styled(RadioGroup.Item)`${s => css`
  ${BaseButtonStyle}
  background: ${s.theme["gray-700"]};
  color: ${s.theme["gray-300"]};
  border: 1px solid ${s.theme["gray-700"]};
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

export const BaseModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0,0,0,0.75);
`

export const BaseModalContent = styled(Dialog.Content)`${s => css`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${s.theme["gray-800"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`}`

export const BaseModalCloseButton = styled(Dialog.Close)`${s => css`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${s.theme["gray-500"]};
`}`

export const BaseModalTitle = styled(Dialog.Title)``