import { configureStore } from '@reduxjs/toolkit'
import ExpenseSlice from './expense-slice'

const store = configureStore({
  reducer: { expenses: ExpenseSlice.reducer },
})

export default store
