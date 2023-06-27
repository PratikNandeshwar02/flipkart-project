import { Box, Button } from '@mui/material';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartAction';

const ActionItem = ({productDetail}) => {

    const navigate= useNavigate();
    const {id} = useParams();
    const [quantity] = useState(1);
    const dispatch = useDispatch();
    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate("/cart")
    }

    return (
        <Box >
            <Box className="" style={{minWidth: "90%", padding: "15px 20px", border: '1px solid #f0f0f0'}}>
                <img src={productDetail.url} alt="productActionImage"  style={{width: '90%'}}/>
            </Box>
            <Button variant='contained' style={{width: "48%", height: "50px", borderRadius: 2, marginRight: 17, background: '#ff9f00'}}
                onClick={() => addItemToCart()}
            >
                <ShoppingCartIcon/>
                Add to Cart
            </Button>
            <Button variant='contained' style={{width: "48%", height: "50px", borderRadius: 2,  background: '#fb641b'}}>
                <FlashOnIcon/>
                Buy Now
            </Button>
        </Box>
    )
}

export default ActionItem;