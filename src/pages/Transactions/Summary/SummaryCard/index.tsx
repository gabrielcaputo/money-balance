import { ArrowCircleUp } from "@phosphor-icons/react";
import { ArrowCircleDown } from "@phosphor-icons/react";
import { CurrencyDollar  } from "@phosphor-icons/react";
import { SummaryCardWrapper } from "./styles";
import { useTheme } from "styled-components";
import { priceFormatter } from "../../../../@utils/formatter";

interface SummaryCardProps {
  value: number | string,
  title: string,
  color?: string,
  icon: SummaryIconProps
}

interface SummaryIconProps {
  color: string,
  name: 'ArrowCircleUp' | 'ArrowCircleDown' | 'CurrencyDollar',
}

function SummaryIcon(props: SummaryIconProps) {
  const size = '2rem'
  switch(props.name) {
    case 'ArrowCircleUp': {
      return <ArrowCircleUp {...props} size={size} />
    }
    case 'ArrowCircleDown': {
      return <ArrowCircleDown {...props} size={size} />
    }
    case 'CurrencyDollar': {
      return <CurrencyDollar {...props} size={size} />
    }
    default: return <></>
  }  
}

export function SummaryCard(props: SummaryCardProps) {
  const theme = useTheme()
  const { value, color = theme['gray-600'], title, icon } = props
  return (
    <SummaryCardWrapper color={color}>
      <header>
        <span>{title}</span>
        <SummaryIcon name={icon.name} color={icon.color} />
      </header>
      <strong>{priceFormatter(value)}</strong>
    </SummaryCardWrapper>
  )
}