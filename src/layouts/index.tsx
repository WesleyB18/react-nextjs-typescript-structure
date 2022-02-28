import * as React from 'react'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import TopBar from './TopBar'

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <TopBar />
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </>
  )
}

export default Layout
