import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import React from 'react'
import Form from './Form/Form'
import classes from './Main.module.css'
import List from './List/List'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Main = () => {
  const expenses = useSelector((state) => state.expenses)
  const transactions = expenses.transactions
  const [isEdit, setIsEdit] = useState(false)
  const [editID, setEditID] = useState(null)

  const handleEdit = (id) => {
    setIsEdit(true)
    setEditID(id)
  }

  const balance = transactions.reduce((acc, curr) => {
    if (curr.type === 'Expense') {
      return acc - curr.amount
    } else {
      return acc + curr.amount
    }
  }, 0)

  return (
    <Card>
      <CardHeader title='Expense Tracker' />

      <CardContent>
        <Typography variant='h5' align='center'>
          Total Balance ${balance}
        </Typography>
        <Divider />

        {/* Form */}
        <Form isEdit={isEdit} editID={editID} setIsEdit={setIsEdit} />
      </CardContent>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <List handleEdit={handleEdit} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
