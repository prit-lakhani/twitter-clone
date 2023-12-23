import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite';

const TweetCard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("logout");
        handleClose();
    }

    const handleDeleteTweet = () => {
        console.log("delete tweet");
        handleClose();
    }

    const handleOpenReplyModel = () => {
        console.log("open model");
    }

    const handleCreateRetweet = () => {
        console.log("retweet");
    }

    const handleLikeTweet = () => {
        console.log("like tweet");
    }

    const handleBarChart = () => {
        console.log("hadnle bar chrt");
    }

    const handleFileUpload = () => {
        console.log("handle file uplaod")
    }


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className=''>

            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
        <RepeatIcon />
        <p> You retweet</p>
        </div> */}

            <div className='flex space-x-5 '>
                <Avatar
                    className='cursor-pointer'
                    alt='username'
                    src='https://images.app.goo.gl/sQ5Viqqrc7NbDLES8'
                    onClick={() => navigate(`/profile/${6}`)}
                />

                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>

                            <span className='font-semibold'> User 1</span>
                            <span className='text-gray-600'>@user1 . 2m</span>

                            <img className='ml-2 w-5 h-5' src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FTwitter_verification&psig=AOvVaw1P-GWqjpl9uielxJAyajzB&ust=1703452522582000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCIDZ6KW9poMDFQAAAAAdAAAAABAE" alt='verified' />

                        </div>
                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <div className='cursor-pointer'>
                            <p className='mb-2 p-0'>Twitter clone using react and spring boot</p>
                            <img className='w-[28rem] border border-gray-400 p-5 rounded-md' src='https://drive.google.com/file/d/1pOzTZZPNFjY2ulHsZutAav2hABl-YMHu/view?usp=sharing' alt='' />
                        </div>

                        <div className='py-5 flex flex-wrap justify-between items-center'>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon
                                    className='cursor-pointer'
                                    onClick={handleOpenReplyModel}
                                />
                                <p>43</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon
                                    className='cursor-pointer'
                                    onClick={handleCreateRetweet}
                                />
                                <p>12</p>

                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                {true ?
                                    <FavoriteIcon
                                        className='cursor-pointer'
                                        onClick={handleLikeTweet}
                                    /> :
                                    <FavoriteBorderOutlinedIcon
                                        className='cursor-pointer'
                                        onClick={handleLikeTweet}
                                    />}
                                <p>12</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon
                                    className='cursor-pointer'
                                    onClick={handleBarChart}
                                />
                                <p>430</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon
                                    className='cursor-pointer'
                                    onClick={handleFileUpload}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TweetCard