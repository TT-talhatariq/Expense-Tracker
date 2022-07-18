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

const Main = () => {
  return (
    <Card>
      <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />

      <CardContent>
        <Typography variant='h5' align='center'>
          Total Balance $100
        </Typography>
        <Typography variant='subtitle1' align='center'>
          Info Card Add Income
        </Typography>
        <Divider />

        {/* Form */}
        <Form />
      </CardContent>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
