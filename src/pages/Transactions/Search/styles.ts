import styled from "styled-components";
import { BaseContainer } from "../../../components/Base/styles";

export const SearchContainer = styled(BaseContainer)`
  margin: 4rem auto 0;
`

export const SearchForm = styled.form`
  display: flex;
  gap: 1rem;

  @media screen and (max-width: 420px) {
    button span {
      display: none;
    }
  }
`