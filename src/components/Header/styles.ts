import styled, { css } from "styled-components";
import { BaseContainer } from "../Base/styles";

export const HeaderWrapper = styled.header`
  ${s => css`
    background: ${s.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
  `}
`

export const HeaderContainer = styled(BaseContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  gap: 0.5rem;
`