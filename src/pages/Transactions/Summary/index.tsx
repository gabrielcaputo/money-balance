import { SummaryContainer } from "./styles";
import { useTheme } from "styled-components";
import { SummaryCard } from "./SummaryCard";
import { useContext } from "react";
import { TransactionsContext } from "../../../contexts/TransactionsContext";

export function Summary() {
  const theme = useTheme()
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    (val, transaction) => {
      if (transaction.type === 'income') {
        val.income += transaction.price
        val.total += transaction.price
      } else {
        val.outcome -= transaction.price
        val.total += transaction.price
      }
      return val
    }, {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

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