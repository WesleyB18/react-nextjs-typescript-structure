import React, { useContext, useState } from 'react'
import { MyAppContext, MyAppContextType } from '../../pages/_app'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : 'inherit',
  color: theme.palette.mode === 'light' ? theme.palette.text.primary : 'inherit',
}))

export default function TopBar() {
  const [fullScreen, setFullScreen] = useState(false);
  const { colorMode }: MyAppContextType = useContext(MyAppContext)
  const { toggleColorMode } = colorMode
  const theme = useTheme()

  const toggleFullScreen = (event: React.MouseEvent<unknown>): void => {
      if (!document.fullscreenElement) {
          if (document.documentElement.requestFullscreen)
              document.documentElement.requestFullscreen()
      } else {
          if (document.exitFullscreen)
              document.exitFullscreen();
      }
      setFullScreen(!fullScreen);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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
            <IconButton
              size="large"
              aria-label={
                theme.palette.mode === 'light'
                ? 'light mode'
                : 'dark mode'
              }
              color="inherit"
              onClick={toggleColorMode}
            >
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <IconButton
              size="large"
              aria-label={fullScreen ? "Sair da tela inteira" : "Tela inteira"}
              color="inherit"
              onClick={toggleFullScreen}
            >
              {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
