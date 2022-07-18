import './App.css'
import Detail from './components/Details/Detail'
import { CssBaseline, Grid, StyledEngineProvider } from '@mui/material'
import Main from './components/Main/Main'
import { useDispatch, useSelector } from 'react-redux'
import { ExpenseActions } from './redux/expense-slice'
function App() {
  const dispatch = useDispatch()
  const expenses = useSelector((state) => state.expenses)

  return (
    <>
      <CssBaseline />
      <StyledEngineProvider>
        <Grid
          container
          spacing={3}
          justifyContent='center'
          alignItems='center'
          style={{ height: '100vh' }}
        >
          <Grid item xs={12} md={4}>
            <Detail title='Income' />
          </Grid>

          <Grid item xs={12} md={3.5}>
            <Main />
          </Grid>

          <Grid item xs={12} md={4}>
            <Detail title='Expense' />
          </Grid>
        </Grid>
      </StyledEngineProvider>
    </>
  )
}

export default App
