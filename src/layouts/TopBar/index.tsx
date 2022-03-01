import React, { cloneElement } from 'react'
import { styled } from '@mui/material/styles'
import MuiAppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import ToggleMenu from './ToggleMenu'
import TogleColorMode from './ToggleColorMode'
import TogleFullscreenMode from './ToggleFullscreen'
import useScrollTrigger from '@mui/material/useScrollTrigger'

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    variant: trigger ? 'elevation' : 'outlined',
    elevation: trigger ? 4 : 0
  });
}

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderTop: 0,
  borderLeft: 0,
  borderRight: 0
}))

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export default function TopBar(props: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll {...props}>
        <AppBar>
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
      </ElevationScroll>
      <Toolbar />
    </Box>
  )
}
