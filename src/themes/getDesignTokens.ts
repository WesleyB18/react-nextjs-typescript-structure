import { PaletteMode, PaletteOptions, ThemeOptions } from '@mui/material'
import { blue } from '@mui/material/colors'

const paletteLight: PaletteOptions = {
  primary: {
    main: blue[600]
  }
}

const paletteDark: PaletteOptions = {
  primary: {
    main: blue[600]
  }
}

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light' ? paletteLight : paletteDark)
  }
})

export default getDesignTokens
