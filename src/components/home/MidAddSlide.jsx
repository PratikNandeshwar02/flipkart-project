import { Box } from '@mui/material';
import React from 'react'

const MidAddSlide = () => {
    const AddImageURL = [
        'https://rukminim1.flixcart.com/flap/960/960/image/2f30db9425df5cec.jpg?q=50',
        'https://rukminim1.flixcart.com/flap/960/960/image/084789479074d2b2.jpg',
        'https://rukminim1.flixcart.com/flap/960/960/image/1ce0c4c1fb501b45.jpg?q=50'
    ];
    const coverUrl = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
         <>
         <Box className="d-flex mt-3 justify-content-between">
            {
                AddImageURL.map((image, index) => {
                    return (
                        <Box key={index}>
                            <img src={image} alt="addImage" style={{ width: '100%' }} />
                        </Box>
                    )
                })
            }
         </Box>
         <img src={coverUrl} alt="addimage" style={{display: 'flex', height: "180px", width: "100%"}} className='mt-3 justify-content-between'/>
         </>
    )
}

export default MidAddSlide; 