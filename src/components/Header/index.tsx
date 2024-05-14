import { Scales } from "@phosphor-icons/react";
import { HeaderContainer, HeaderLogo, HeaderWrapper } from "./styles";

import { useTheme } from "styled-components";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  const theme = useTheme()
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <Scales color={theme["green-500"]} weight="fill" size={'2.5rem'} />
          <span>Money Balance</span>
        </HeaderLogo>
        <NewTransactionModal />
      </HeaderContainer>
    </HeaderWrapper>
  )
}