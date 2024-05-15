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

    tr {
      @media screen and (max-width: 720px) {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }
    }

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
        display: flex;
        width: 100%;
        padding: 0.5rem 1.25rem;
        text-align: left !important;
        gap: 0.25rem;
        align-items: center;

        &.description {
          border-radius: 6px 6px 0 0 !important;
          padding-top: 1.25rem;
        }

        &.price {
          font-size: 1.25rem;
          font-weight: bold;
        }

        &.category,
        &.createdAt {
          color: ${s.theme["gray-500"]};
          width: 50%;
          border-radius: 0 !important;
          padding-bottom: 1.25rem;
        }

        &.category {
          border-bottom-left-radius: 6px !important;
        }

        &.createdAt {
          text-align: right !important;
          justify-content: flex-end;
          border-bottom-right-radius: 6px !important;
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