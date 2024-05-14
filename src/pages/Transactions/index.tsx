import { Header } from "../../components/Header";
import { Search } from "./Search";
import { Summary } from "./Summary";
import { Table } from "./Table";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <Search />
      <Table />
    </div>
  )
}