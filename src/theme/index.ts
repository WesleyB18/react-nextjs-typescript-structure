import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const light = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    }
  }
})

const dark = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    }
  }
})

export { light, dark }