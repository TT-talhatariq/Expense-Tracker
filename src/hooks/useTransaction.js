import { useDispatch, useSelector } from 'react-redux'
import { ExpenseActions } from '../redux/expense-slice'
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from '../data/categories'

const useTransaction = (title) => {
  const dispatch = useDispatch()
  const transactions = useSelector((state) => state.expenses.transactions)
  resetCategories()

  //Transaction Filteration of a particular type (Income, Expense)
  const rightTransaction = transactions.filter(
    (transaction) => transaction.type === title
  )
  //   console.log(transactions, 'transactions')

  //Total amount of all Transactions
  const totalAmount = rightTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  )

  //categories of particular type
  const catogaries = title === 'Income' ? incomeCategories : expenseCategories

  //   console.log(rightTransaction, totalAmount, catogaries)
  // Amount of each category added
  rightTransaction.forEach((transaction) => {
    catogaries.forEach((category) => {
      if (transaction.category === category.type) {
        category.amount += transaction.amount
      }
    })
  })

  // Filter Categories with amount greater than 0
  const filteredCategories = catogaries.filter(
    (category) => category.amount > 0
  )
  //create chart data
  const chartData = {
    labels: filteredCategories.map((category) => category.type),
    datasets: [
      {
        data: filteredCategories.map((category) => category.amount),
        backgroundColor: filteredCategories.map((category) => category.color),
      },
    ],
    options: {
      responsive: true,
    },
  }
  return {
    chartData,
    totalAmount,
    filteredCategories,
  }
}

export default useTransaction
