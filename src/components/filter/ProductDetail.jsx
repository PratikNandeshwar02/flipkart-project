import { Box, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import React from 'react'

const ProductDetail = ({productDetail}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime()+5 * 24 * 60 *60 * 1000);

    return (
        <Box style={{marginTop: 10}}>
            <Typography style={{fontWeight: 600}}>{productDetail.title.longTitle}</Typography>
            <Typography style={{marginTop: 5, color: '#878787', fontSize: 14,}}>
                8 Ratings & 1 Reviews
                <Box component="span">
                    <img src={fassured} alt="fAssured" style={{width: 77, marginLeft: 20}} />
                </Box>
            </Typography>
            <Typography>
                <Box component="span" style={{fontSize: 28, marginRight: 15}}>₹{productDetail.price.cost}</Box>
                <Box component="span" style={{color: '#878787', marginRight: 15}}>
                    <strike>₹{productDetail.price.mrp}</strike>
                </Box>
                <Box component="span" style={{color: ' #388E3C'}}>{productDetail.price.discount}</Box>
            </Typography>
            <Typography>Available offers</Typography>

            <Box style={{fontSize: 14}}>
                <Typography style={{fontSize: 14, marginTop: 10}}>
                    <LocalOfferIcon style={{marginRight: 10, color: '#00cc00', fontSize: 14}}/>
                    Get extra 20% off upto ₹50 on 1 item(s) T&C 
                </Typography>
                <Typography style={{fontSize: 14, marginTop: 10}}>
                    <LocalOfferIcon style={{marginRight: 10, color: '#00cc00', fontSize: 14}}/>
                    Get extra 13% off (price inclusive of discount) T&C
                </Typography>
                <Typography style={{fontSize: 14, marginTop: 10}}>
                    <LocalOfferIcon style={{marginRight: 10, color: '#00cc00', fontSize: 14}}/>
                    Sign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100* Know More
                </Typography>
                <Typography style={{fontSize: 14, marginTop: 10}}>
                    <LocalOfferIcon style={{marginRight: 10, color: '#00cc00', fontSize: 14}}/>
                    Buy 2 items save 5%; Buy 3 or more save 10%
                </Typography>
                <Typography style={{fontSize: 14, marginTop: 10}}>
                    <LocalOfferIcon style={{marginRight: 10, color: '#00cc00', fontSize: 14}}/>
                    5% Cashback on Flipkart Axis Bank Card
                </Typography>
                <Typography style={{fontSize: 14, marginTop: 10}}>
                    <LocalOfferIcon style={{marginRight: 10, color: '#00cc00', fontSize: 14}}/>
                    Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
                </Typography>
            </Box>
            <Table>
                <TableBody>
                    <TableRow style={{}}>
                        <TableCell style={{ border: 'none' ,color: '#878787'}}>Delivery</TableCell>
                        <TableCell style={{ border: 'none' ,fontWeight: 600}}>Delivery by { date.toDateString() } | ₹40</TableCell>
                    
                    </TableRow>
                    <TableRow style={{border: "none"}}>
                        <TableCell style={{color: '#878787',  border: 'none'}}>Warranty</TableCell>
                        <TableCell style={{border: 'none'}}>No Warranty</TableCell>

                    </TableRow>
                    <TableRow style={{border: "none"}}>
                        <TableCell style={{color: '#878787', border: 'none'}}>Seller</TableCell>
                        <TableCell style={{border: 'none'}}>
                            <Box component="span"  style={{color: '#2874f0'}}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{productDetail.price.cost}  </Typography>
                        </TableCell>
                    </TableRow>

                    <TableRow style={{border: "none"}}>
                        <TableCell colSpan={2} style={{border: 'none'}}>
                            <img src={adURL} alt="filpkartPoints" style={{width: 390}} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell style={{color: '#878787', border: 'none'}}>Description</TableCell>
                        <TableCell style={{border: 'none'}}>{productDetail.description}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Box>
    )
}

export default ProductDetail;