import { Grid } from '@mui/material'
import { Item } from './Item'

export const Content = () => {
  return (
    <Grid sx={{ flex: 1, overflowY: 'auto' }}>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </Grid>
  )
}
