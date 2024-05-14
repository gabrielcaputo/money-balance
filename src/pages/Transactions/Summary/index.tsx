import { SummaryContainer } from "./styles";
import { useTheme } from "styled-components";
import { SummaryCard } from "./SummaryCard";

export function Summary() {
  const theme = useTheme()
  return(
    <SummaryContainer>
      <SummaryCard
        title="Entradas"
        value={17000.00}
        icon={{
          color: `${theme["green-500"]}`,
          name: 'ArrowCircleUp',
        }}
      />
      <SummaryCard
        title="Saídas"
        value={10400.00}
        icon={{
          color: `${theme["red-500"]}`,
          name: 'ArrowCircleDown',
        }}
      />
      <SummaryCard
        title="Total"
        value={27400.00}
        color={theme["green-500"]}
        icon={{
          color: `${theme.white}`,
          name: 'CurrencyDollar',
        }}
      />
    </SummaryContainer>
  )
}