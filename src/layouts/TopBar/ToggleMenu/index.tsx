import React, { useContext } from 'react'
import { LayoutContext } from '@/contexts/LayoutContext'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

export default function ToggleMenu() {
  const { toggleMenu } = useContext(LayoutContext)

  return (
    <Tooltip title="Menu principal">
      <IconButton
        size="large"
        edge="start"
        aria-label="Menu principal"
        sx={{ mr: 2 }}
        onClick={toggleMenu(true)}
      >
        <MenuIcon />
      </IconButton>
    </Tooltip>
  )
}
