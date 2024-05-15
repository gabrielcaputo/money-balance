import { Price, TableContainer } from "./styles"
import { priceFormatter, dateFormatter } from "../../../@utils/formatter";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
import { TagSimple } from "@phosphor-icons/react";

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
                <td className="description">{transaction.description}</td>
                <td className="price"><Price value={transaction.price}>{priceFormatter(transaction.price)}</Price></td>
                <td className="category"><TagSimple /> {transaction.category}</td>
                <td className="createdAt">{dateFormatter(transaction.createdAt)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </TableContainer>
  )
}