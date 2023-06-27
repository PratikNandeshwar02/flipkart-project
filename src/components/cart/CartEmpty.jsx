import { Box, Typography } from '@mui/material';
import React from 'react'

const CartEmpty = () => {
    const imgUrl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

    return (


        
        <Box style={{width: '65vh', height: '80%', background: '#ffffff', paddingBottom: "16px"}}>
            <Box className="text-center pt-5">
                <img src={imgUrl} alt="empty" style={{width: '50%'}}/>
                <Typography style={{fontSize: 16, fontWeight: 600}}>Your cart is empty</Typography>
                <Typography style={{fontSize: 16, fontWeight: 600}}>Add items to it now</Typography>
            </Box>
        </Box>
    )
}

export default CartEmpty;