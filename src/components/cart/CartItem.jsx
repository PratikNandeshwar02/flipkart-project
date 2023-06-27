import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import CartButtons from './CartButtons';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartAction';


const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch = useDispatch();

    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <Box style={{borderTop: '1px solid #f0f0f0', display: 'flex', background: "#ffffff"}}>

            <Box style={{margin: 20, display: 'flex', flexDirection: 'column'}}>
                <img src={item.url} alt="product" style={{height: 110}}/>
                <CartButtons/>
            </Box>

            <Box style={{margin: '20px'}}>
                <Typography>{item.title.longTitle}</Typography>

                <Typography style={{color: "#878787", fontSize: '14px', marginTop: 10}}>
                    Seller: RetailNet
                    <Box component="span"><img src={fassured} alt="item" style={{width: 50, marginLeft: 10}}/></Box>
                </Typography>
                <Typography style={{margin: '20px 0'}}>
                    <Box component="span" style={{fontWeight: 600, fontSize: 18}}>₹{item.price.cost}</Box>
                    <Box component="span" style={{color: '#878787', margin: '0 15px'}}>
                        <strike>₹{item.price.mrp}</strike>
                    </Box>
                    <Box component="span" style={{color: ' #388E3C'}}>{item.price.discount}</Box>
                </Typography>
                <Button style={{marginTop: '20px', color: "#000", fontWeight: "600"}}
                    onClick={() => removeItemFromCart(item.id)}
                >
                    Remove
                </Button>
            </Box>
        </Box>
    )
}

export default CartItem;