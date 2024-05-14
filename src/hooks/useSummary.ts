import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
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

  return summary;
}