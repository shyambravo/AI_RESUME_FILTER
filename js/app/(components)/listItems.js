import * as React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'
import SourceIcon from '@mui/icons-material/Source'
import { usePathname } from 'next/navigation'
import { PAGES } from '../enum'

const reRoute = (selectedPage) => {
  window.location = `/${selectedPage}`
}

const MainListItems = () => {
  let pathname = usePathname().split('/')[1]

  return (
    <React.Fragment>
      <ListItemButton
        selected={pathname === PAGES.home}
        onClick={() => reRoute(PAGES.home)}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton
        selected={pathname === PAGES.reports}
        onClick={() => reRoute(PAGES.reports)}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItemButton>
      <ListItemButton
        selected={pathname === PAGES.AI}
        onClick={() => reRoute(PAGES.AI)}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Ai magic" />
      </ListItemButton>
    </React.Fragment>
  )
}

export { MainListItems }
