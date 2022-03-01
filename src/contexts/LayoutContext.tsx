import React, { createContext, useState } from 'react'

interface LayoutContextValues {
  openMenu: boolean
  toggleMenu: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void
}

export const LayoutContext = createContext<LayoutContextValues>({
  openMenu: false,
  toggleMenu: () => () => { }
})

export const LayoutProvider: React.FC = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpenMenu(open)
    }

  const layoutContextValues = {
    openMenu,
    toggleMenu
  }

  return (
    <LayoutContext.Provider value={layoutContextValues}>
      {children}
    </LayoutContext.Provider>
  )
}
