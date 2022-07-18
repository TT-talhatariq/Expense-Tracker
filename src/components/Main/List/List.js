import React from 'react'
import {
  List as MUIList,
  ListItem,
  ListItemText,
  Avatar,
  IconButton,
  ListItemAvatar,
  ListItemSecondaryAction,
  Slide,
} from '@mui/material'
import { Delete, MoneyOff } from '@mui/icons-material'
import classes from './List.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { ExpenseActions } from '../../../redux/expense-slice'

const List = () => {
  const expenses = useSelector((state) => state.expenses)
  const transactions = expenses.transactions
  const dispatch = useDispatch()

  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction='down'
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === 'Expense'
                    ? classes.expense
                    : classes.income
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge='end'
                aria-label='delete'
                onClick={() => {
                  dispatch(ExpenseActions.removeTransaction(transaction.id))
                }}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}

export default List
