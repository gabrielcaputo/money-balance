import styled, { css } from "styled-components"

export const SummaryCardWrapper = styled.div<{color: string}>`${s => css`
  background: ${s.color};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${s.theme["gray-300"]};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`}`