import styled from "styled-components";
import { BaseContainer } from "../../../components/Base/styles";
import { css } from "styled-components";

export const TableContainer = styled(BaseContainer)`${s => css`
  margin: 1rem auto 0;

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
      padding: 1.25rem 2rem;
      background: ${s.theme["gray-700"]};
      color: ${s.theme["gray-300"]};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        text-align: right;
      }

      @media screen and (max-width: 720px) {
        display: block;
        width: 100%;
        padding: 0.5rem 1.25rem;
        text-align: left !important;

        &:first-child {
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
          border-bottom-left-radius: 0px;
          padding-top: 1.25rem;
        }
        
        &:last-child {
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;          
          border-top-right-radius: 0px;          
          padding-bottom: 1.25rem;
        }
      }
    }
  }
`}`

interface PriceProps {
  value: number | string
}

export const Price = styled.span<PriceProps>`${s => css`
  color: ${Number(s.value) >= 0 ? s.theme["green-500"] : s.theme["red-500"]}
`}`