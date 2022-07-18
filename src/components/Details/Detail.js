import React from 'react'
import classes from './Detail.module.css'
import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import useTransaction from '../../hooks/useTransaction'
import { Chart, registerables, ArcElement } from 'chart.js'
Chart.register(...registerables)
Chart.register(ArcElement)

const Detail = ({ title }) => {
  const { chartData, totalAmount } = useTransaction(title)
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant='h5'>{totalAmount}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  )
}

export default Detail
