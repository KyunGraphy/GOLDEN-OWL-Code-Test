/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from '@mui/material'
import MinusIcon from '../../assets/minus.png'
import PlusIcon from '../../assets/plus.png'
import TrashIcon from '../../assets/trash.png'

export const Item = () => {
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

  return (
    <Grid sx={{ margin: '20px 0', display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={style}>
        <img
          alt=''
          src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png'
          style={image}
        />
      </Box>
      <Box>
        <Typography sx={{ fontWeight: '600' }}>Nike Air Zoom Pegasus 36</Typography>
        <Typography variant='h6' sx={{ fontWeight: '800' }}>$108.97</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: '0.5em' }}>
            <Box sx={IncDecButton}>
              <img src={MinusIcon} alt='' style={{ width: '100%', height: '100%' }} />
            </Box>
            <Typography variant='h6' sx={{ fontWeight: '600' }}>1</Typography>
            <Box sx={IncDecButton}>
              <img src={PlusIcon} alt='' style={{ width: '100%', height: '100%' }} />
            </Box>
          </Box>
          <Box sx={TrashButton}>
            <img src={TrashIcon} alt='' style={{ width: '100%', height: '100%' }} />
          </Box>
        </Box>
      </Box>
    </Grid>
  )
}
