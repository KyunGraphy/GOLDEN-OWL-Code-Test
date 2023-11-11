import { Grid } from '@mui/material'
import { Header } from './Header'
import { Content } from './Content'

export const Product = () => {
  return (
    <Grid
      sx={{
        position: 'relative',
        margin: '40px',
        width: '360px',
        height: '80vh',
        background: '#FFFFFF',
        borderRadius: '28px',
        padding: '0 28px 12px 28px',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
      }}
    >
      <Header />
      <Content />
    </Grid>
  )
}
