import { Link, Typography } from '@mui/material'

const Footer = (props) => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '10px',
        display: 'flex',
        justifyContent: 'center',
        width: 'calc(100% - 300px)',
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </div>
  )
}

export { Footer }
