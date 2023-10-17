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
      <ListItemButton selected={pathname === PAGES.home}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" onClick={() => reRoute(PAGES.home)} />
      </ListItemButton>
      <ListItemButton selected={pathname === PAGES.reports}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText
          primary="Reports"
          onClick={() => reRoute(PAGES.reports)}
        />
      </ListItemButton>
      <ListItemButton selected={pathname === PAGES.AI}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Ai magic" onClick={() => reRoute(PAGES.AI)} />
      </ListItemButton>
      <ListItemButton selected={pathname === PAGES.source}>
        <ListItemIcon>
          <SourceIcon />
        </ListItemIcon>
        <ListItemText
          primary="Data source"
          onClick={() => reRoute(PAGES.source)}
        />
      </ListItemButton>
    </React.Fragment>
  )
}

export { MainListItems }
