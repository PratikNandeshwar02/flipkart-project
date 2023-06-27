import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const CartBalance = ({cartItems}) => {
    const [price , setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    const totalAmount = () => {
        let price = 0, discount = 0;

        cartItems?.map(item => {
        price += item.price.mrp;
        discount += ( item.price.mrp - item.price.cost );
        });

        setPrice(price);
        setDiscount(discount);
    }

    useEffect(() => {
        totalAmount();
    },[])

    return (
        <Box style={{background: '#FFFFFF',}}>
            <Box style={{padding: '15px 24px', background: '#fff',  borderBottom: '1px solid #f0f0f0'}}>
                <Typography style={{color: '#878787'}}>PRICE DETAILS</Typography>
            </Box>
            <Box className="p-4 ">
                <Typography>Price ( {cartItems?.length} item)
                <Box component="span"> ₹{price}</Box>
                </Typography>

                <Typography>Discount 
                <Box component="span"> -₹{discount}</Box>
                </Typography>

                <Typography>Delivery Charges
                <Box component="span"> ₹40</Box>
                </Typography>

                <Box style={{borderTop: '1px dashed #e0e0e0', marginBottom: 15}}></Box>
                <Typography style={{fontFamily: 'cursive', fontWeight: 600}}>Total Amount
                <Box component="span"> ₹{ price - discount }</Box>
                </Typography>

                <Box style={{borderTop: '1px dashed #e0e0e0', marginBottom: 15}}></Box>
                <Typography>You will save ₹{discount -40} on this order</Typography>
            </Box>
        </Box>
    )
}

export default CartBalance;