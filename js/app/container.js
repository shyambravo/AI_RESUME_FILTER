'use client'

import React from 'react'
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import NavBarComponent from './(components)/NavBar'
import { Container, CssBaseline, Grid, Toolbar } from '@mui/material'
import { Footer } from './(components)/Footer'
import { usePathname } from 'next/navigation'
import { PAGES } from './enum'

const defaultTheme = createTheme()

export default function MainContainer(props) {
  const { children } = props

  let pathname = usePathname().split('/')[1]

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <NavBarComponent />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container style={{ maxWidth: '100vw' }} sx={{ mt: 4, mb: 4 }}>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                {children}
              </Grid>
              {Object.values(PAGES).includes(pathname) && <Footer />}
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}
