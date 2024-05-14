import { MagnifyingGlass } from "@phosphor-icons/react";
import { BaseButton, BaseInput } from "../../../components/Base/styles";
import { SearchContainer, SearchForm } from "./styles";

export function Search() {
  return (
    <SearchContainer>
      <SearchForm>
        <BaseInput type="text" placeholder="Busque por transações" />
        <BaseButton type="submit" variant="secondary">
          <MagnifyingGlass /> Buscar
        </BaseButton>
      </SearchForm>
    </SearchContainer>
  )
}