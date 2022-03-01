import { PaletteMode } from '@mui/material'
import { blue, grey } from '@mui/material/colors'

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
    ? {
      // palette values for light mode
      primary: {
        main: blue[600]
      },
      text: {}
    }
    : {
      // palette values for dark mode
      primary: {
        main: blue[600]
      },
      background: {},
      text: {}
    })
  }
})

export { getDesignTokens }
