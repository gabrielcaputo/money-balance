import { BaseButton, BaseInput, BaseModalCloseButton, BaseModalContent, BaseModalOverlay, BaseModalTitle } from "../Base/styles";
import * as Dialog from "@radix-ui/react-dialog"
import { TransactionForm, TransactionRadio, TransactionType } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";


const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

export type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const createTransaction = useContextSelector(TransactionsContext, (context) => {
    return context.createTransaction
  })
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: {
      isSubmitting
    }
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    await createTransaction(data)
    reset();
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <BaseButton type="button">Nova transação</BaseButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <BaseModalOverlay />
        <BaseModalContent>
          <BaseModalTitle>Nova transação</BaseModalTitle>
          <BaseModalCloseButton>
            <X />
          </BaseModalCloseButton>
          <TransactionForm onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <BaseInput
              type="text"
              placeholder="Descrição"
              required
              {...register('description')}
            />

            <BaseInput
              type="number"
              placeholder="Preço"
              min={0} 
              required
              {...register('price', {
                valueAsNumber: true
              })}
            />

            <BaseInput
              type="text"
              placeholder="Categoria"
              required
              {...register('category')}
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionRadio
                      variant="income"
                      value="income"
                    >
                      <ArrowCircleUp size={'1.5rem'} />
                      Entrada
                    </TransactionRadio>

                    <TransactionRadio
                      variant="outcome"
                      value="outcome"
                    >
                      <ArrowCircleDown size={'1.5rem'} />
                      Saída
                    </TransactionRadio>
                  </TransactionType>
                )
              }}
            />

            <BaseButton type="submit" disabled={isSubmitting}>Cadastrar</BaseButton>
          </TransactionForm>
        </BaseModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}