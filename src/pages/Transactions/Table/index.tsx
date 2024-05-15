import { Price, TableContainer } from "./styles"
import { priceFormatter, dateFormatter } from "../../../@utils/formatter";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

export function Table() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  return (
    <TableContainer>
      <table>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.description}</td>
                <td><Price value={transaction.price}>{priceFormatter(transaction.price)}</Price></td>
                <td>{transaction.category}</td>
                <td>{dateFormatter(transaction.createdAt)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}