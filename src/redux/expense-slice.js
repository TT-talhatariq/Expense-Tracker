import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

const ExpenseSlice = createSlice({
  name: 'expense',
  initialState: {
    transactions: [],
  },
  reducers: {
    test(state) {
      console.log(current(state.transactions))
    },
    addTransaction(state, action) {
      state.transactions.push(action.payload)
    },
    removeTransaction(state, action) {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      )
    },
  },
})

export const ExpenseActions = ExpenseSlice.actions
export default ExpenseSlice
