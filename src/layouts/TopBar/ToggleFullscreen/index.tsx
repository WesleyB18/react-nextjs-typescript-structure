import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'

export default function ToggleFullscreen() {
  const [fullScreen, setFullScreen] = useState(false);

  const toggleFullscreen = (event: React.MouseEvent<unknown>): void => {
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
    <Tooltip title={
      fullScreen
      ? 'Sair da tela inteira'
      : 'Tela inteira'
    }>
      <IconButton
        size="large"
        aria-label={fullScreen ? 'Tela inteira' : 'Sair da tela inteira'}
        onClick={toggleFullscreen}
      >
        {fullScreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
      </IconButton>
    </Tooltip>
  )
}
