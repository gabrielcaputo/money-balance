import { Price, TableContainer } from "./styles"

export function Table() {
  return (
    <TableContainer>
      <table>
        <tbody>
          <tr>
            <td width="35%">Nome</td>
            <td><Price value={-12500.00}>R$ -12.500,00</Price></td>
            <td>Venda</td>
            <td>13/04/2024</td>
          </tr>
          <tr>
            <td width="35%">Nome</td>
            <td><Price value={12500.00}>R$ 12.500,00</Price></td>
            <td>Venda</td>
            <td>13/04/2024</td>
          </tr>
          <tr>
            <td width="35%">Nome</td>
            <td><Price value={12500.00}>R$ 12.500,00</Price></td>
            <td>Venda</td>
            <td>13/04/2024</td>
          </tr>
          <tr>
            <td width="35%">Nome</td>
            <td><Price value={12500.00}>R$ 12.500,00</Price></td>
            <td>Venda</td>
            <td>13/04/2024</td>
          </tr>
          <tr>
            <td width="35%">Nome</td>
            <td><Price value={12500.00}>R$ 12.500,00</Price></td>
            <td>Venda</td>
            <td>13/04/2024</td>
          </tr>
        </tbody>
      </table>
    </TableContainer>
  )
}