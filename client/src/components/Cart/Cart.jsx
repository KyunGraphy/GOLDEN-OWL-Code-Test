import { Grid } from '@mui/material'
import { Header } from './Header'
import { Content } from './Content'
import useFetch from '../../hooks/useFetch'

export const Cart = () => {
  const { loading, data: cart } = useFetch('http://localhost:8800/api/v1/cart/')

  return (
    <Grid
      sx={{
        margin: '40px',
        width: '360px',
        height: '80vh',
        background: '#FFFFFF',
        borderRadius: '28px',
        padding: '0 28px 12px 28px',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header cart={cart} />
      <Content loading={loading} cart={cart} />
    </Grid>
  )
}
