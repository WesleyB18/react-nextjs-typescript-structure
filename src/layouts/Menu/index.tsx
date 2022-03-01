import React, { useContext } from 'react'
import { LayoutContext } from '@/contexts/LayoutContext'
import Drawer from '@mui/material/Drawer'
import Navigation from './Navigation'

export default function TemporaryDrawer() {
  const { openMenu, toggleMenu } = useContext(LayoutContext)

  return (
    <Drawer
      anchor="left"
      open={openMenu}
      onClose={toggleMenu(false)}
    >
      <Navigation />
    </Drawer>
  )
}
