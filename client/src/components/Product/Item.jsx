/* eslint-disable react/prop-types */
import { Box, Button, Grid, Typography } from '@mui/material'
import axios from 'axios';
import tickIcon from '../../assets/check.png'
import useFetch from '../../hooks/useFetch';

export const Item = ({ shoes }) => {
  const style = {
    width: '100%',
    height: 360,
    background: shoes.color,
    borderRadius: '28px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const image = {
    height: '95%',
    transform: 'rotate(-30deg)',
  }

  const { data: cart } = useFetch('http://localhost:8800/api/v1/cart/')

  const handleAddCartItem = async () => {
    try {
      await axios.post('http://localhost:8800/api/v1/cart', {
        productId: shoes._id,
        quantity: 1,
      })
      location.reload();
    } catch (err) {
      console.log(err)
    }
  };
  const isExistedItem = (cart[0]?.cartData.some(item => item.productId === shoes._id))

  return (
    <Grid sx={{ margin: '40px 0' }}>
      <Box sx={style}>
        <img alt='' src={shoes.image} style={image} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: '600', padding: '1em 0' }}>{shoes.name}</Typography>
      <Typography sx={{ fontFamily: "'Rubik', sans-serif" }}>{shoes.description}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: '600', padding: '1em 0' }}>${shoes.price}</Typography>
        {!isExistedItem ? (
          <Button
            sx={{
              fontWeight: '600',
              background: '#F6C90E',
              color: '#303841',
              height: 'fit-content',
              '&:hover': {
                background: '#F6C90E',
              },
            }}
            onClick={handleAddCartItem}
          >ADD TO CART</Button>
        ) : (
          <Box sx={{
            height: '40px',
            width: '40px',
            background: '#F6C90E',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img alt='' src={tickIcon} style={{ width: '80%' }} />
          </Box>
        )}
      </Box>
    </Grid>
  )
}
