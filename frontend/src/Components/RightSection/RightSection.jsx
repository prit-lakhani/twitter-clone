import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Brightness4OutlinedIcon from '@mui/icons-material/Brightness4Outlined';
import { Button } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const RightSection = () => {

    const handleChangeTheme = () => {
        console.log("change theme");
    }

    return (
        <div className='py-5 sticky top'>

            <div className='relative flex items-center'>

                <input type='text' className='py-3 rounded-full text-gray-500 w-full pl-12' />

                <div className='absolute  top-0 left-0 pl-3 pt-3'>
                    <SearchOutlinedIcon className='text-gray-500' />
                </div>

                <Brightness4OutlinedIcon className='ml-3 cursor-pointer' onClick={handleChangeTheme} />

            </div>

            <section className='my-5'>

                <h1 className='text-xl font-bold'>Get Verified</h1>
                <h1 className='font-bold my-2'>Subscribe to unlock new features</h1>
                <Button variant='contained' sx={{ padding: "10px", paddingX: "20px", borderRadius: "25px" }}>
                    Get Verified
                </Button>
            </section>

            <section className='mt-7 space-y-5'>
                <h1 className='font-bold text-xl py-1'>
                    What's happening?
                </h1>

                <div>
                    <p className='text-sm'> ICC World Cup . LIVE </p>
                    <p className='font-bold'> Ind vs Aus </p>
                </div>

               {[1,1,1,1].map((item) => <div className='flex justify-betwwen w-full'>
                    <div>
                        <p>  Entertainment . Trending</p>
                        <p className='font-bold'> #Animal </p>
                        <p className='font-bold'> 34.8 Tweets </p>
                    </div>
                    <MoreHorizIcon />
                </div>
                )}

            </section>

        </div>
    )
}

export default RightSection