import { Scales } from "@phosphor-icons/react";
import { HeaderContainer, HeaderLogo, HeaderWrapper } from "./styles";
import { BaseButton } from "../Base/styles";
import { useTheme } from "styled-components";

export function Header() {
  const theme = useTheme()
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogo>
          <Scales color={theme["green-500"]} weight="fill" size={'2.5rem'} />
          <span>Money Balance</span>
        </HeaderLogo>
        <BaseButton>Nova transação</BaseButton>
      </HeaderContainer>
    </HeaderWrapper>

    
  )
}