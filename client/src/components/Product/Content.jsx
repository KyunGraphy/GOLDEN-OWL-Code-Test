import { Grid } from '@mui/material'
import { Item } from './Item'
import shoesData from '../../mocks/shoes.json'

export const Content = () => {
  return (
    <Grid sx={{ flex: 1 }}>
      {shoesData.shoes.map(shoes => (
        <Item
          key={shoes.id}
          shoes={shoes}
        />
      ))}
    </Grid>
  )
}
