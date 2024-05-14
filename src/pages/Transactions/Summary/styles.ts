import styled from "styled-components";
import { BaseContainer } from "../../../components/Base/styles";

export const SummaryContainer = styled(BaseContainer)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`