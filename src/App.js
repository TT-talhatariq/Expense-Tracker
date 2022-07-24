import classes from './App.module.css'
import Detail from './components/Details/Detail'
import { CssBaseline, Grid, StyledEngineProvider } from '@mui/material'
import Main from './components/Main/Main'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  return (
    <>
      <CssBaseline />
      <StyledEngineProvider>
        <Grid
          container
          spacing={3}
          justifyContent='center'
          alignItems='center'
          className={classes.App}
          style={{ height: '100vh' }}
        >
          <Grid item xs={10} md={4.5} className={classes.mobile}>
            <Main />
          </Grid>

          <Grid item xs={10} md={3.3}>
            <Detail title='Income' />
          </Grid>

          <Grid item xs={10} md={4.5} className={classes.desktop}>
            <Main />
          </Grid>

          <Grid item xs={10} md={3.3}>
            <Detail title='Expense' />
          </Grid>
        </Grid>
      </StyledEngineProvider>
    </>
  )
}

export default App
