import React from 'react'
import NextHead from 'next/head'

const Head: React.FC = ({ children }) => {
  return (
    <NextHead>
      {children}
    </NextHead>
  )
}

export default Head
