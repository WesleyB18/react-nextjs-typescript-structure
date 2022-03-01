import React, { useContext } from 'react'
import { MyAppContext, MyAppContextType } from '../../../pages/_app'
import { useTheme } from '@mui/material/styles'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

export default function ToggleColorMode() {
  const { colorMode }: MyAppContextType = useContext(MyAppContext)
  const theme = useTheme()

  return (
    <Tooltip title={
      theme.palette.mode === 'light'
      ? 'Modo noturno'
      : 'Modo claro'
    }>
      <IconButton
        size="large"
        aria-label={
          theme.palette.mode === 'light'
          ? 'Modo noturno'
          : 'Modo claro'
        }
        onClick={colorMode.toggleColorMode}
      >
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Tooltip>
  )
}