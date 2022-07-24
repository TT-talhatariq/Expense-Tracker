import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

//
const ExpenseSlice = createSlice({
  name: 'expense',
  initialState: {
    transactions:
      JSON.parse(localStorage.getItem('transactions')).length !== 0
        ? JSON.parse(localStorage.getItem('transactions'))
        : [
            {
              amount: 200,
              category: 'Extra income',
              type: 'Income',
              date: '2022-07-24',
              id: '3aa24900-b89c-453c-ae30-f1f5383a2f44',
            },
            {
              amount: 100,
              category: 'Food',
              type: 'Expense',
              date: '2022-07-12',
              id: '320e3185-4a93-4ba0-a1fc-aa59012c704b',
            },
          ],
  },
  reducers: {
    test(state) {
      console.log(current(state.transactions))
    },
    addTransaction(state, action) {
      state.transactions.push(action.payload)
      localStorage.setItem('transactions', JSON.stringify(state.transactions))
    },
    removeTransaction(state, action) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      )
      localStorage.setItem('transactions', JSON.stringify(state.transactions))
    },
    editTransaction(state, action) {
      state.transactions = state.transactions.map((transaction) => {
        if (transaction.id === action.payload.id) {
          return action.payload
        }
        return transaction
      })
    },
  },
})

export const ExpenseActions = ExpenseSlice.actions
export default ExpenseSlice
