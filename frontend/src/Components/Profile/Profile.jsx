import React, { useState } from 'react'
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TweetCard from '../HomeSection/TweetCard';

const Profile = () => {

    const [tabValue, setTabValue] = useState("1");

    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    const handleProfileModel = () => {
        console.log("handle profile model");
    }

    const handleFollowUsers = () => {
        console.log("handleFollowUsers");
    }

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);

        if(newValue === 4) {
            console.log("Likes tweets");
        }else if(newValue === 1) {
            console.log("Users tweets");
        }
    }

    return (
        <div>
            <section className={` bg-white z-50 flex items-center sticy top-0 bg-opacity-95`}>

                <KeyboardBackspaceOutlinedIcon
                    className='cursor-pointer'
                    onClick={handleBack}
                />

                <h1 className='py-5 text-xl font-bold opacity-90 ml-5 '> Alice</h1>

            </section>

            <section>
                <img className='w-[100%] h-[15rem] object-cover' src='https://cdn.pixabay.com/photo/2023/10/27/09/18/mountains-8344543_1280.jpg' />
            </section>

            <section className='pl-6'>
                <div className='flex justify-between items-start mt-5 h-[5rem]'>
                    <Avatar
                        className='transform -translate-y-24'
                        alt='Alice'
                        src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg'
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                    />

                    {true ?
                        <Button
                            className='rounded-full'
                            variant='contained'
                            sx={{ borderRadius: "20px" }}
                            onClick={handleProfileModel}
                        >
                            Edit Profile
                        </Button>
                        :
                        <Button
                            className='rounded-full'
                            variant='contained'
                            sx={{ borderRadius: "20px" }}
                            onClick={handleFollowUsers}
                        >
                            {true ? "Follow" : "Unfollow"}
                        </Button>
                    }
                </div>

                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Alice</h1>
                        {true && (
                            <img className='ml-2 w-5 h-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1920px-Twitter_Verified_Badge.svg.png" alt='verified' />
                        )}
                    </div>
                    <h1 className='text-gray-500'>@alice</h1>
                </div>

                <div className='mt-2 space-y-3'>

                    <p>Twitter clone using React + Spring Boot + MySQL + Kafka</p>
                    <div className='py-1 flex space-x-5'>

                        <div className='flex items-center text-gray-500'>
                            <BusinessCenterIcon />
                            <p className='ml-2'>Education</p>
                        </div>

                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>San Francisco Bay Area</p>
                        </div>

                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon />
                            <p className='ml-2'>Joined Dec 2023</p>
                        </div>
                    </div>

                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>9</span>
                            <span className='text-gray-500'>Following</span>
                        </div>

                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>100</span>
                            <span className='text-gray-500'>Followers</span>
                        </div>
                    </div>

                </div>
            </section>

            <section className='py-5'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />

          </TabList>
        </Box>
        <TabPanel value="1">
            {[1,1,1,1].map((item) => <TweetCard />)}
        </TabPanel>
        <TabPanel value="2">replies</TabPanel>
        <TabPanel value="3">media</TabPanel>
        <TabPanel value="4">likes</TabPanel>

      </TabContext>
    </Box>
            </section>
        </div>
    )
}

export default Profile