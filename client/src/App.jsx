import { Grid } from '@mui/material';
import { Product } from './components/Product/product';
import { Cart } from './components/Cart/cart';

function App() {
  return (
    <Grid sx={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      background: '#F6C90E',
    }}>
      <Product />
      <Cart />
    </Grid>
  )
}

export default App
