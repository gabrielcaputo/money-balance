import { MagnifyingGlass } from "@phosphor-icons/react";
import { BaseButton, BaseInput } from "../../../components/Base/styles";
import { SearchContainer, SearchForm } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })
  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit(handleSearchTransactions)}>
        <BaseInput
          type="text"
          placeholder="Busque por transações"
          {...register('query')}
        />
        <BaseButton disabled={isSubmitting} type="submit" variant="secondary">
          <MagnifyingGlass /> Buscar
        </BaseButton>
      </SearchForm>
    </SearchContainer>
  )
}