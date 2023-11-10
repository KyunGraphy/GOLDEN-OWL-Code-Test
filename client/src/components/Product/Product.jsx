import { Grid } from '@mui/material'
import { Header } from './Header'
import { Content } from './Content'

export const Product = () => {
  return (
    <Grid
      sx={{
        width: '400px',
        height: '80vh',
        background: '#FFFFFF',
        borderRadius: '28px',
        padding: '0 28px 12px 28px',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <Header />
      <Content />
    </Grid>
  )
}
