import { Grid } from '@mui/material'
import React from 'react'
import Navigation from "../Navigation/Navigation";
import HomeSection from '../HomeSection/HomeSection';
import RightSection from '../RightSection/RightSection';

const HomePage = () => {
  return (
    <Grid container xs = {12} className='px-5 lg:px-36 justify-between'>

        {/* To DO: change Xs = {0}}  */}
        <Grid item xs={1} lg={2.5} className='hidden lg:block w-full relative'>
            <Navigation />
        </Grid>

        <Grid item xs={12} lg={6} className='px-5 lg:px-9 hidden lg:block w-full relative'>
            <HomeSection />
        </Grid>

        <Grid item xs={1} lg={2.5} className='hidden lg:block w-full relative'>
            <RightSection />
        </Grid>

    </Grid>
  )
}

export default HomePage