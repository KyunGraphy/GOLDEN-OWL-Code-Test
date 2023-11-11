import { Box, Grid } from '@mui/material'
import { Item } from './Item'
import useFetch from '../../hooks/useFetch'
// import shoesData from '../../mocks/shoes.json'

export const Content = () => {
  const { loading, data: product } = useFetch('http://localhost:8800/api/v1/product/')

  return (
    <Grid sx={{ flex: 1 }}>
      {loading ? (
        <Box>Please wait...</Box>
      ) : (
        <Box>
          {product.map(shoes => (
            <Item
              key={shoes.id}
              shoes={shoes}
            />
          ))}
        </Box>
      )}
    </Grid>
  )
}
