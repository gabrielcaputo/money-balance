import { Price, TableContainer } from "./styles"
import { priceFormatter, dateFormatter } from "../../../@utils/formatter";
import { useContext } from "react";
import { TransactionsContext } from "../../../contexts/TransactionsContext";

export function Table() {
  const { transactions } = useContext(TransactionsContext)
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