import { TransactionsContext } from "../contexts/TransactionsContext"
import { useContextSelector } from "use-context-selector"
import { useMemo } from "react"

export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
      (value, transaction) => {
        if (transaction.type === 'income') {
          value.income += transaction.price
          value.total += transaction.price
        } else {
          value.outcome -= transaction.price
          value.total += transaction.price
        }
        return value
      }, {
        income: 0,
        outcome: 0,
        total: 0
      }
    )
  }, [transactions])

  return summary;
}