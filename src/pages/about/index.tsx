import * as React from 'react'
import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Layout from '@/layouts/index'
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
        <Box sx={{ my: 2 }}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
        <ProTip />
        <Copyright />
      </Box>
    </Layout>
  )
}

export default About
