import { BaseButton, BaseInput, BaseModalCloseButton, BaseModalContent, BaseModalOverlay, BaseModalTitle } from "../Base/styles";
import * as Dialog from "@radix-ui/react-dialog"
import { TransactionForm, TransactionRadio, TransactionType } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";

export function NewTransactionModal() {
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
          <TransactionForm>
            <BaseInput type="text" placeholder="Descrição" required />
            <BaseInput type="number" min={0} placeholder="Preço" required />
            <BaseInput type="text" placeholder="Categoria" required />

            <TransactionType>
              <TransactionRadio variant="income" value="income">
                <ArrowCircleUp size={'1.5rem'} />
                Entrada
              </TransactionRadio>
              <TransactionRadio variant="outcome" value="outcome">
                <ArrowCircleDown size={'1.5rem'} />
                Saída
              </TransactionRadio>
            </TransactionType>

            <BaseButton type="submit">Cadastrar</BaseButton>
          </TransactionForm>
        </BaseModalContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}