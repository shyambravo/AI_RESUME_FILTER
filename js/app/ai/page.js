'use client'

import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { TextAreaWrapper } from '../(components)/TextAreaWrapper'
import { InputElement } from '../(components)/InputWrapper'

const dummyJson = ['What can i do for you ?', 'I want this', 'Here you go']

export default function AIContainer() {
  const [data, setData] = useState(dummyJson)

  const sendText = (event) => {
    setData([...data, event.target.value])
  }

  return (
    <Grid item xs={8}>
      <TextAreaWrapper data={data} />
      <br />
      <InputElement
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            sendText(event)
          }
        }}
      />
    </Grid>
  )
}
