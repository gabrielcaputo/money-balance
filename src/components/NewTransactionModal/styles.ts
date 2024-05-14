import styled, { css } from "styled-components";
import { BaseRadio } from "../Base/styles";
import * as RadioGroup from '@radix-ui/react-radio-group';

export const TransactionForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`

interface TransactionRadioProps {
  variant: 'income' | 'outcome'
}

export const TransactionRadio = styled(BaseRadio)<TransactionRadioProps>`${s => css`
  svg {
    color: ${s.variant === 'income' ? s.theme["green-300"] : s.theme["red-300"]};
    transition: all 0.2s ease;
  }

  &:hover {
    background: ${s.variant === 'income' ? s.theme["green-300"] : s.theme["red-300"]};
    border: 1px solid ${s.variant === 'income' ? s.theme["green-300"] : s.theme["red-300"]};
  }

  &[data-state='unchecked']:hover {
    background: ${s.theme["gray-600"]};

  }

  &[data-state='checked'] {
    color: ${s.theme.white};
    background: ${s.variant === 'income' ? s.theme["green-500"] : s.theme["red-500"]};
    svg {
      color: ${s.theme.white};
    }
  }

`}`