import { SummaryContainer } from "./styles";
import { useTheme } from "styled-components";
import { SummaryCard } from "./SummaryCard";
import { useSummary } from "../../../hooks/useSummary";

export function Summary() {
  const theme = useTheme()
  const summary = useSummary()

  return(
    <SummaryContainer>
      <SummaryCard
        title="Entradas"
        value={summary.income}
        icon={{
          color: `${theme["green-500"]}`,
          name: 'ArrowCircleUp',
        }}
      />
      <SummaryCard
        title="Saídas"
        value={summary.outcome}
        icon={{
          color: `${theme["red-500"]}`,
          name: 'ArrowCircleDown',
        }}
      />
      <SummaryCard
        title="Total"
        value={summary.total}
        color={theme["green-700"]}
        icon={{
          color: `${theme.white}`,
          name: 'CurrencyDollar',
        }}
      />
    </SummaryContainer>
  )
}