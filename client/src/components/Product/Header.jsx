import { Box, Grid } from '@mui/material'
import logo from '../../assets/nike.png'

export const Header = () => {
  return (
    <Grid sx={{ position: 'sticky', top: 0, left: 0, background: '#FFFFFF', zIndex: 1, paddingTop: '12px' }}>
      <img alt='' src={logo} style={{ width: 80 }} />
      <Box sx={{ fontWeight: 'bold', fontSize: 24 }}>
        Our Products
      </Box>
    </Grid>
  )
}
