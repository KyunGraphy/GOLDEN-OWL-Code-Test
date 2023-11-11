/* eslint-disable react/prop-types */
import { Grid } from '@mui/material'
import { Item } from './Item'

// eslint-disable-next-line react/prop-types, no-unused-vars
export const Content = (props) => {
  return (
    <Grid sx={{ flex: 1, overflowY: 'auto' }}>
      {props.cart.map((item, index) => <Item key={index} item={item} index={index} />)}
    </Grid>
  )
}
