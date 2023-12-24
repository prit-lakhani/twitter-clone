import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';
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

export default function TweetReplyModal({handleClose, open}) {

  const navigate = useNavigate();

  const [uploadingImage, setUploadinImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleSubmit = (values) => {
        console.log("handle submit", values);
  }

  const handleSelectImage = (event) => {
    setUploadinImage(true);
    const imgURL = event.target.files[0]
    formik.setFieldValue("image", imgURL);
    setUploadinImage(false);
    setSelectedImage(imgURL);
}

  const formik = useFormik({
    initialValues: {
        content: '',
        image: '',
        tweetId: 4,
    },
    onSubmit: handleSubmit
  })

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='flex space-x-5 '>
                <Avatar
                    className='cursor-pointer'
                    alt='username'
                    src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg'
                    onClick={() => navigate(`/profile/${6}`)}
                />

                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>

                            <span className='font-semibold'> Alice</span>
                            <span className='text-gray-600'>@alice . 2m</span>

                            <img className='ml-2 w-5 h-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/1920px-Twitter_Verified_Badge.svg.png" alt='verified' />

                        </div>
                    
                    </div>

                    <div className='mt-2'>
                        <div 
                            className='cursor-pointer'
                            onClick={ () => navigate(`/tweet/${4}`) }
                            >
                            <p className='mb-2 p-0'>Twitter clone using react and spring boot</p>
                        </div>

                  
                    </div>
                </div>
              
            </div>
            <section className={`py-10`}>
                <div className='flex space-x-5'>
                    <Avatar alt="username"
                        src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg' />
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit}>
                            <div >
                                <input
                                    type='text'
                                    name='content'
                                    placeholder='What is happening?'
                                    className={`border-none outline-none text-xl bg-transpernt`}
                                    {...formik.getFieldProps('content')}
                                />

                                {formik.errors.content && formik.touched.content && (
                                    <span className='text-red-500'> {formik.errors.content} </span>
                                )}
                            </div>
                            {/* <div>
                                <img src='' alt='' />
                            </div> */}

                            <div className='flex justify-between items-center mt-5'>
                                <div className='flex space-x-5 items-center'>
                                    <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                        <ImageIcon
                                            className='text-[#1d9bf0]' />
                                        <input
                                            type='file'
                                            name='imageFile'
                                            className='hidden'
                                            onChange={handleSelectImage}
                                        />
                                    </label>

                                    <FmdGoodIcon className='text-[#1d9bf0]' />
                                    <TagFacesIcon className='text-[#1d9bf0]' />
                                </div>
                                <div>
                                    <Button
                                        sx={{
                                            width: "100%",
                                            borderRadius: "20px",
                                            paddingY: "8px",
                                            paddingX: "20px",
                                            bgcolor: "#1e88e5"
                                        }}
                                        variant='contained'
                                        type='submit'
                                    >
                                        Tweet
                                    </Button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Box>
      </Modal>
    </div>
  );
}
