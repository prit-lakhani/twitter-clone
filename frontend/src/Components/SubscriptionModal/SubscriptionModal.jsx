import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
  outline: 'none',
  borderRadius: 4
};

const features = [
  "Priortized rankings in conversations and search",
  "See approximately twice as many Tweets between ads in your For You and Following timelines",
  "Add bold and italic text in your Tweets",
  "Post longer videos and 1080p video uploads",
  "All the existing Blue features, including Edit Tweet, Bookmark Folders and early access to new features"
];

export default function SubscriptionModal({ handleClose, open }) {

  const [plan, setPlan] = React.useState("Anually");

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex items-center space-x-3'>
            <IconButton onClick={handleClose} aria-label="delete">
              <CloseIcon />
            </IconButton>
          </div>
          <div className='flex justify-center py-10'>
            <div className='w-[100%] space-y-10'>
              <div className='p-5 rounded-md flex items-center justify-between bg-slate-400 shadow-lg'>
                <h1 className='text-xl pr-5'>
                  Blue subscribers with a verified phone number will get a blue checkmark once approved.
                </h1>

                <img
                  className='w-24 h-24'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1920px-Twitter_Verified_Badge.svg.png'
                  alt=''
                />
              </div>

              <div className='flex justify-between rounded-full border px-5 py-3 border border-gray-500'>

                <div>
                  <span onClick={() => setPlan("Annually")} className={`${plan === 'Annually' ? "text-black" : "text-gray"}`}>Annually</span>
                  <span className='text-green-500 text-sm ml-5'>SAVE 12%</span>
                </div>
                <p onClick={() => setPlan("Monthly")} className={`${plan === 'Monthly' ? "text-black" : "text-gray"}`}>Montly</p>
              </div>

              <div className='space-y-3'>
                {features.map((item) => <div className='flex items-center space-x-5'>
                  <FiberManualRecordIcon sx={{ width: "7px", height: "7px" }} />
                  <p className='text-xs'>
                    {item}
                  </p>
                </div>
                )
                }
              </div>
              <div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3'>
                <span className='line-through italic'>$120.00</span>
                <span className='px-5'>$90/year</span>

              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

