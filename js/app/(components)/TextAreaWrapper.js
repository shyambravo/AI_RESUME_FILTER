'use client'

import * as React from 'react'
import { styled } from '@mui/system'

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
}

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
}

const Dummy = (props) => {
  return (
    <div
      className={props.className}
      style={{ height: '400px', position: 'relative', padding: '30px' }}
    >
      {props.value.map((txt, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: index % 2 === 0 ? 0 : 'unset',
            right: index % 2 === 0 ? 'unset' : 0,
            marginTop: `${index * 50}px`,
            padding: '10px',
            borderRadius: '10px',
            marginLeft: '30px',
            marginRight: '30px',
            backgroundColor: index % 2 === 0 ? '#08BAB7' : '#0864BA',
            color: 'white',
          }}
        >
          {txt}
        </div>
      ))}
    </div>
  )
}

const Textarea = styled(Dummy)(
  ({ theme }) => `
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 24px ${
    theme.palette.mode === 'dark' ? blue[900] : blue[100]
  };

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === 'dark' ? blue[600] : blue[200]
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
)

const TextAreaWrapper = (props) => {
  return (
    <Textarea aria-label="minimum height" minRows={40} value={props.data} />
  )
}

export { TextAreaWrapper }
