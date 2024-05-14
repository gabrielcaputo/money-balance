import { createContext, useEffect, useState } from "react";
import { Transaction } from "../@types/transactions";
import { ReactNode } from "react"
import { api } from "../lib/axios";
import { NewTransactionFormInputs } from "../components/NewTransactionModal";

export interface TransactionsContextType {
  transactions: Transaction[],
  fetchTransactions: (query?: string) => Promise<void>,
  createTransaction: (data: NewTransactionFormInputs) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query,
        _sort: 'createdAt',
        _order: 'desc'
      }
    })    
    setTransactions(response.data)
  }

  async function createTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data
    const newTransaction = {
      description,
      price: type === 'income' ? price : price * -1,
      category,
      type,
      createdAt: new Date().toISOString()
    }
    const response = await api.post('/transactions', newTransaction)
    
    setTransactions(state => [
      response.data,
      ...state
    ])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}