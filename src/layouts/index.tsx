import React from 'react'
import Container from '@mui/material/Container'
import { LayoutProvider } from '@/contexts/LayoutContext'
import TopBar from './TopBar'
import Menu from './Menu'

const Layout: React.FC = ({ children }) => {

  return (
    <LayoutProvider>
      <TopBar />
      <Menu />
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </LayoutProvider>
  )
}

export default Layout
