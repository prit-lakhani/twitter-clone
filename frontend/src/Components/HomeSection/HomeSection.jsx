import { Avatar, Button } from '@mui/material'
import { Formik, useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TweetCard from './TweetCard';

const validationSchema = Yup.object().shape({
    content: Yup.string().required("Tweet text is required")
})

const HomeSection = () => {

    const [uploadingImage, setUploadinImage] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleSubmit = (values) => {
        console.log("values ", values)
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
            content: "",
            image: ""
        },
        onSubmit: handleSubmit,
        validationSchema,
    })

    return (
        <div className='space-y-5'>

            <section>
                <h1 className='py-5 text-xl font-bold opacity-90'> Home </h1>
            </section>
            <section className={`pb-10`}>
                <div className='flex space-x-5'>
                    <Avatar alt="username"
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png' />
                    <div className='w-full'>
                        <form onSubmit={formik.handleSubmit}>
                            <div >
                                <input type='text' name='content' placeholder='What is happening?' className={`border-none outline-none text-xl bg-transpernt`}
                                    {...formik.getFieldProps('content')} />
                                {formik.errors.eontent && formik.touched.content && (
                                    <span className='text-red-500'> {formik.errors.content} </span>
                                )}
                            </div>
                            <div>
                                {/* <img src='' alt='' /> */}
                            </div>
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

                                        <div> 
                                            <Button sx={{ 
                                                width: "100%", 
                                                borderRadius: "20px", 
                                                paddingY: "8px", 
                                                paddingX: "20px", 
                                                bgcolor: "#1e88e5" 
                                                }} 
                                                variant='conatined'
                                                type='submit'
                                                >
                                                   Tweet 
                                            </Button>
                                        </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section>
                {[1, 1, 1, 1, 1].map((item) => <TweetCard />)}
            </section>
        </div>
    )
}

export default HomeSection