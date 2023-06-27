import { Box,  Button,  Typography } from '@mui/material';
import  {  useSelector } from "react-redux";

import React from 'react';
import CartItem from './CartItem';
import CartBalance from './CartBalance';
import CartEmpty from './CartEmpty';

    

const Cart = () => {

   const  {cartItems} = useSelector(state => state.cart);


    return (
        <Box className="row d-flex justify-content-center align-items-center" style={{display: 'flex', padding: '30px 135px', }}>
            {
                cartItems.length > 0 ? 
                <Box className="" style={{display: 'flex'}}>
                    <Box className="col-9 me-5">
                        <Box style={{padding: '15px 24px', background: '#ffffff'}}>
                            <Typography>My Cart ({cartItems?.length})</Typography>
                        </Box>
                        {
                            cartItems?.map(item => <CartItem item={item}/>)
                        }
                        <Box style={{padding: '16px 22px', background: '#fff', borderTop: '1px solid #f0f0f0'}}>
                            <Button className='d-flex me-auto' style={{background: '#fb641b', color: '#fff', width: '250px', height: '51px',borderRadius: '2px'}}>
                                Place Order
                            </Button>
                        </Box>
                    </Box>
                    <Box className="col-3 d-flex justify-content-end-100" style={{display: 'flex', marginLeft: 'auto'}}>
                        <CartBalance cartItems={cartItems}/>
                    </Box>
                </Box>
                :
                <CartEmpty/>
            }

            
        </Box>
    )
}

export default Cart;