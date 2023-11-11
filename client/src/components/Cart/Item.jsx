/* eslint-disable react/prop-types */
import axios from 'axios'
import { Box, Grid, Typography } from '@mui/material'
import MinusIcon from '../../assets/minus.png'
import PlusIcon from '../../assets/plus.png'
import TrashIcon from '../../assets/trash.png'
import { useState } from 'react'

// eslint-disable-next-line no-unused-vars
export const Item = ({ item, index }) => {
  const [quantity, setQuantity] = useState(item.cartData[index].quantity)
  const style = {
    height: 60,
    width: 60,
    background: '#E1E7ED',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const image = {
    height: '144%',
    transform: 'rotate(-30deg)',
  };
  const IncDecButton = {
    padding: '0.5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
    borderRadius: '50%',
    background: '#E1E7ED',
    cursor: 'pointer',
  };
  const TrashButton = {
    padding: '0.5em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
    borderRadius: '50%',
    background: '#F6C90E',
    cursor: 'pointer',
  };

  const handleDecrease = async () => {
    try {
      await axios.put(`http://localhost:8800/api/v1/cart/decrease/${item.cartData[index]._id}`);
      setQuantity(prev => prev - 1)
    } catch (err) {
      console.log(err)
    }
  };

  const handleIncrease = async () => {
    try {
      await axios.put(`http://localhost:8800/api/v1/cart/increase/${item.cartData[index]._id}`)
      setQuantity(prev => prev + 1)
    } catch (err) {
      console.log(err)
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/v1/cart/${item.cartData[index]._id}`)
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <Grid sx={{ margin: '20px 0', display: 'flex', justifyContent: 'space-between', gap: '2.5em' }}>
      <Box sx={style}>
        <img
          alt=''
          src={item.productData[index].image}
          style={image}
        />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: '600' }}>{item.productData[index].name}</Typography>
        <Typography variant='h6' sx={{ fontWeight: '800' }}>${item.productData[index].price}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '1em 0' }}>
          <Box sx={{ display: 'flex', gap: '0.5em' }}>
            <Box sx={IncDecButton} onClick={handleDecrease}>
              <img src={MinusIcon} alt='' style={{ width: '100%', height: '100%' }} />
            </Box>
            <Typography variant='h6' sx={{ fontWeight: '600' }}>{quantity}</Typography>
            <Box sx={IncDecButton} onClick={handleIncrease}>
              <img src={PlusIcon} alt='' style={{ width: '100%', height: '100%' }} />
            </Box>
          </Box>
          <Box sx={TrashButton} onClick={handleDelete}>
            <img src={TrashIcon} alt='' style={{ width: '100%', height: '100%' }} />
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}
