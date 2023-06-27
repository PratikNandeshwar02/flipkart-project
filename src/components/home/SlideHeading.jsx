import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import React from 'react'

const SlideHeading = ({title, url}) => {
    return (
        <Box className="d-flex">
            <Card sx={{  maxWidth: 240 }} className='d-flex justify-content-center flex-column'>
                <Box  style={{height: 240, padding: '50px 10px'}}>
                    <Typography variant='h3' component="div" className='d-flex justify-content-center  text-center align-content-center fs-3' style={{lineHeight: 1.5}}>
                         {title}
                    </Typography>
                    <Box className="d-flex justify-content-center pt-4">
                        <Button variant='contained'className=''style={{borderRadius: 2}} >View all</Button>
                    </Box>
                  
                </Box>
                <CardMedia component="img" width="120"
                    image={url}
                    alt="green category"
                />
            </Card>
        </Box>
    )
} 

export default SlideHeading; 