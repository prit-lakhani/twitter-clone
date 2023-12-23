import React from 'react'
import { navigationMenu } from './NavigationMenu'
import { useNavigate } from 'react-router-dom'
import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navigation = () => {
    
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("logout");
        handleClose()
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
        <div className='h-screen sticky top-0'>

            <div>
                <div className='py-5'>
                    <svg height="30" width="30" viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-k200y r-1nao33i r-5sfk15 r-kzbkwu"><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>

                </div>

                <div className='space-y-6'>

                    {navigationMenu.map((item) => <div className='cursor-pointer flex space-x-3 items-center' onClick={() => item.title === "Profile" ? navigate(`profile/${1}`) : navigate(item.path)}>
                        {item.icon}
                        <p className='text-xl'>{item.title}</p>
                    </div>)}
                </div>

                <div className='py-10'>
                    <Button
                        sx={{ width: "100%", borderRadius: "29px", py: "15px", bgcolor: '#1e88e5' }} variant='conatined'>
                        Tweet
                    </Button>
                </div>
            </div>

            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-3'>
                    <Avatar
                        alt='username'
                        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fuser%2F&psig=AOvVaw0bOPmMZhdqQZubYUcKnwjA&ust=1703406805775000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCODAqrWTpYMDFQAAAAAdAAAAABAD'
                    />
                    <div>
                        <span>User 1</span> <br></br>
                        <span className='opacity-70'>@user1</span>
                    </div>
                   
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
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </div>

            </div>

        </div>
    )
}

export default Navigation