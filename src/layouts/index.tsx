import * as React from 'react'
import Container from '@mui/material/Container'
import TopBar from './TopBar'

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export default function Layout(props: Props) {
  const { children } = props

  return (
    <>
      <TopBar {...props} />
      <Container component="main" maxWidth="lg">
        {children}
      </Container>
    </>
  )
}
