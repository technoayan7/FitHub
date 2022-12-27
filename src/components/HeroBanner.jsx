import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
      <Box sx={{
          mt: { lg: '150px', xs: '90px' },
          ml:{sm:'50px'}  
      }} position='relative' p='20px'>
          <Typography color='#818cf8' fontWeight='600' fontSize='30px'>
              Welcome Dear!
          </Typography>
          <Typography fontWeight='700' sx={{fontSize:{lg:'52px',color: '#e2e4e9', xs:'45px'}}} mb='6px' mt='15px'>
              Sweat, Smile <br/>& Repeat.
          </Typography>
          <Typography fontSize='20px' color='#e2e4e9' lineHeight='35px' mb={3}>
              Checkout the most effective exercises.
          </Typography>
          <Button variant='contained' color='error' href='#exercises' sx={{backgroundColor:'#6366f1' ,padding:'10px'}}>
              Explore Exercises
          </Button>
          <Typography fontWeight={600} color='#747687' sx={{opacity:0.1,display:{lg:'block',xs:'none'}}} fontSize='200px'>
              Exercises
          </Typography>
          <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner