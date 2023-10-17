'use client'

import React from 'react'
import FileUploadComponent from '../(components)/FileUpload'
import { Grid } from '@mui/material'

export default function page() {
  return (
    <Grid item xs={12}>
      <FileUploadComponent />
    </Grid>
  )
}
