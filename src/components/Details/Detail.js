import React from 'react'
import classes from './Detail.module.css'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
const Detail = ({ title }) => {
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant='h5'>$50</Typography>
        {/* <Doughnut data='DATA' /> */}
      </CardContent>
    </Card>
  )
}

export default Detail
