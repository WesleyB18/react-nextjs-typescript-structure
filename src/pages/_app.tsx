import React, { createContext, useState, useEffect, useMemo } from 'react'
import Head from '@/components/Head'
import { AppContext, AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '@/utils/createEmotionCache'
import { parseCookies, setCookie } from 'nookies'
import getDesignTokens from '@/themes/getDesignTokens'
import { createTheme } from '@mui/material/styles'
import { PaletteMode } from '@mui/material'

const clientSideEmotionCache = createEmotionCache()

interface ColorMode {
  toggleColorMode: (event: React.MouseEvent<unknown>) => void
}

interface ThemeContextValues {
  colorMode: ColorMode
}

export const ThemeContext = createContext<ThemeContextValues>({
  colorMode: {
    toggleColorMode: () => {}
  }
})

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  paletteMode?: PaletteMode
}

export default function MyApp(props: MyAppProps) {
  const { Component, paletteMode = 'light', emotionCache = clientSideEmotionCache, pageProps } = props
  const [mode, setMode] = useState<PaletteMode>(paletteMode)

  useEffect(() => {
    setCookie(null, 'paletteMode', mode, {
      maxAge: 86400 * 7,
      path: '/'
    })
  }, [mode])

  const colorMode = useMemo(
    () => ({
      toggleColorMode: (event: React.MouseEvent<unknown>) => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        )
      },
    }),
    [],
  )

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])
  const themeContextValues: ThemeContextValues = {
    colorMode
  }

  return (
    <ThemeContext.Provider value={themeContextValues}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ThemeContext.Provider>
  )
}

MyApp.getInitialProps = async ({ ctx }: AppContext) => {
  const { paletteMode } = parseCookies(ctx)
  return { paletteMode: paletteMode }
}
