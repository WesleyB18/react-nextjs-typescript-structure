import * as React from 'react'
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Layout from '../../layouts'
import Head from '@/components/Head'
import Link from '@/components/Link'
import ProTip from '@/components/PropTip'
import Copyright from '@/components/Copyright'

const About: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          About
        </title>
      </Head>
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Layout>
  )
}

export default About
