import React from 'react';
import { Box } from '@mui/material';


const SliderAdd = () => {
    const addUrl = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Box className="" style={{ padding: 5, background: '#ffffff' }}>
            <img src={addUrl} alt="addImage" style={{width: 220 }}/>
        </Box>
    )
}

export default SliderAdd;