import { Grid } from '@mui/material';
import { Product } from './components/Product/product';
import { Cart } from './components/Cart/cart';

function App() {
  return (
    <Grid sx={{
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#F6C90E',
      flexWrap: 'wrap',
    }}>
      <Product />
      <Cart />
    </Grid>
  )
}

export default App
