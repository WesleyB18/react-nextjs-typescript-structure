import React from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ToggleMenu from './ToggleMenu'
import TogleColorMode from './ToggleColorMode'
import TogleFullscreenMode from './ToggleFullscreen'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : 'inherit',
  color: theme.palette.mode === 'light' ? theme.palette.text.primary : 'inherit',
}))

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <ToggleMenu />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <TogleColorMode />
            <TogleFullscreenMode />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
