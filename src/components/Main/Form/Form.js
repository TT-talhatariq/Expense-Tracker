import { useEffect, useState } from 'react'
import {
  FormControl,
  Grid,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { ExpenseActions } from '../../../redux/expense-slice'
import classes from './Form.module.css'
import { v4 as uuidv4 } from 'uuid'
import { incomeCategories } from '../../../data/categories'
import { expenseCategories } from '../../../data/categories'
import CustomizedSnackbars from '../../snakbar/snakBar'
const formateDate = (date) => {
  const d = new Date(date)
  let month = `${d.getMonth() + 1}`
  let day = `${d.getDate()}`
  const year = d.getFullYear()

  if (month.length < 2) {
    month = `0${month}`
  }
  if (day.length < 2) {
    day = `0${day}`
  }

  return [year, month, day].join('-')
}

const initialState = {
  amount: '',
  category: '',
  type: '',
  date: formateDate(new Date()),
}

const Form = ({ isEdit, editID, setIsEdit }) => {
  const transactions = useSelector((state) => state.expenses.transactions)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState(initialState)

  console.log(isEdit)
  useEffect(() => {
    if (isEdit) {
      const transaction = transactions.find(
        (transaction) => transaction.id === editID
      )
      setFormData({
        amount: transaction.amount,
        category: transaction.category,
        type: transaction.type,
        date: transaction.date,
      })
    }
  }, [isEdit, editID, transactions])

  const selectedCatogries =
    formData.type === 'Expense' ? expenseCategories : incomeCategories

  const addTransaction = () => {
    dispatch(
      ExpenseActions.addTransaction({
        ...formData,
        amount: +formData.amount,
        id: uuidv4(),
      })
    )

    setFormData(initialState)
    setOpen(true)
  }

  const editTransaction = () => {
    dispatch(
      ExpenseActions.editTransaction({
        ...formData,
        amount: +formData.amount,
        id: editID,
      })
    )

    setIsEdit(false)
    setFormData(initialState)
    setOpen(true)
  }
  return (
    <Grid container spacing={3}>
      <CustomizedSnackbars open={open} setOpen={setOpen} />
      <Grid item xs={12}>
        <Typography variant='subtitle2' align='center' gutterBottom>
          ...
        </Typography>
      </Grid>

      {/* Expense */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor='expense-type'>Expense Type</InputLabel>
          <Select
            variant='standard'
            InputLabelProps={{ shrink: false }}
            value={formData.type}
            onChange={(e) => {
              setFormData({ ...formData, type: e.target.value })
            }}
          >
            <MenuItem value='Income'>Income</MenuItem>
            <MenuItem value='Expense'>Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Category */}
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel htmlFor='catogary'>Catogary</InputLabel>
          <Select
            variant='standard'
            value={formData.category}
            onChange={(e) => {
              setFormData({ ...formData, category: e.target.value })
            }}
          >
            {selectedCatogries.map((catogary) => (
              <MenuItem key={catogary.type} value={catogary.type}>
                {catogary.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Amount */}
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          type='number'
          label='Amount'
          variant='standard'
          value={formData.amount}
          onChange={(e) => {
            setFormData({ ...formData, amount: e.target.value })
          }}
        />
      </Grid>

      {/* Date */}

      <Grid item xs={6}>
        <TextField
          fullWidth
          type='date'
          variant='standard'
          label='Date'
          InputLabelProps={{ shrink: true }}
          value={formData.date}
          onChange={(e) => {
            setFormData({
              ...formData,
              date: formateDate(e.target.value),
            })
          }}
        />
      </Grid>

      <Grid item xs={12}>
        <Button
          variant='outlined'
          color='primary'
          alignItems='center'
          fullWidth
          onClick={isEdit ? editTransaction : addTransaction}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  )
}

export default Form
