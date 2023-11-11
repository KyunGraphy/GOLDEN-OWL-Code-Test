import { Grid } from '@mui/material'
import { Header } from './Header'
import { Content } from './Content'

export const Cart = () => {
  return (
    <Grid
      sx={{
        margin: '40px',
        width: '360px',
        height: '80vh',
        background: '#FFFFFF',
        borderRadius: '28px',
        padding: '12px 28px',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header />
      <Content />
    </Grid>
  )
}
