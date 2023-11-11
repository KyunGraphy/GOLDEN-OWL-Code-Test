/* eslint-disable react/prop-types */
import { Box, Button, Grid, Typography } from '@mui/material'

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

  return (
    <Grid sx={{ margin: '40px 0' }}>
      <Box sx={style}>
        <img alt='' src={shoes.image} style={image} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: '600', padding: '1em 0' }}>{shoes.name}</Typography>
      <Typography sx={{ fontFamily: "'Rubik', sans-serif" }}>{shoes.description}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: '600', padding: '1em 0' }}>${shoes.price}</Typography>
        <Button sx={{
          fontWeight: '600',
          background: '#F6C90E',
          color: '#303841',
          height: 'fit-content',
          '&:hover': {
            background: '#F6C90E',
          },
        }}>ADD TO CART</Button>
      </Box>
    </Grid>
  )
}
