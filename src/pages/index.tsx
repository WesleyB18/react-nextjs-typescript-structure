import * as React from 'react'
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Layout from '@/layouts/index'
import Head from '@/components/Head'
import Link from '@/components/Link'
import ProTip from '@/components/PropTip'
import Copyright from '@/components/Copyright'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>
          Home
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
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Layout>
  )
}

export default Home
