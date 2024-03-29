import React from 'react'
import { CarouselComponent } from '../(components)/Carousel'
import { Grid } from '@mui/material'
import TextMobileStepper from '../(components)/Stepper'

export default function Home() {
  return (
    <Grid item xs={12}>
      <CarouselComponent />
      <TextMobileStepper />
    </Grid>
  )
}
