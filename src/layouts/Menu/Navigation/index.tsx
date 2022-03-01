import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { LayoutContext } from '@/contexts/LayoutContext'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Toolbar from '@mui/material/Toolbar'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MailIcon from '@mui/icons-material/Mail'
import DraftsIcon from '@mui/icons-material/Drafts'
import Link from '@/components/Link'

const Navigation: React.FC = () => {
  const { toggleMenu } = useContext(LayoutContext)
  const router = useRouter()

  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleMenu(false)}
      onKeyDown={toggleMenu(false)}
    >
      <Toolbar />
      <Divider />
      <List>
        {[
          { text: 'Home', href: '/', icon: <MailIcon /> },
          { text: 'About', href: '/about', icon: <DraftsIcon /> }
        ].map((item) => (
          <ListItem
            button
            key={item.href}
            component={Link}
            href={item.href}
            selected={router.route === item.href}
          >
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Navigation
