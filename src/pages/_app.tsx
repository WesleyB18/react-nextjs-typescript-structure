import React, { createContext, useEffect } from 'react'
import Head from '@/components/Head'
import { AppContext, AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../utils/createEmotionCache'
import { parseCookies, setCookie } from 'nookies'
import { getDesignTokens } from '../themes'
import { createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

const clientSideEmotionCache = createEmotionCache()

type ColorModeType = {
  toggleColorMode: (event: React.MouseEvent<unknown>) => void
}

export const MyAppContext = createContext<MyAppContextType>({
  colorMode: {
    toggleColorMode: (event) => {}
  }
})

export type MyAppContextType = {
  colorMode: ColorModeType
}

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  paletteMode?: PaletteMode
}

export default function MyApp(props: MyAppProps) {
  const { Component, paletteMode = 'light', emotionCache = clientSideEmotionCache, pageProps } = props
  const [mode, setMode] = React.useState<PaletteMode>(paletteMode);

  useEffect(() => {
    setCookie(null, 'paletteMode', mode, {
      maxAge: 86400 * 7,
      path: '/'
    })
  }, [mode])

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: (event: React.MouseEvent<unknown>) => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        )
      },
    }),
    [],
  )

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  const myAppContextValues: MyAppContextType = {
    colorMode
  }

  return (
    <MyAppContext.Provider value={myAppContextValues}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </MyAppContext.Provider>
  )
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  const { paletteMode } = parseCookies(ctx)
  return { paletteMode: paletteMode }
}
