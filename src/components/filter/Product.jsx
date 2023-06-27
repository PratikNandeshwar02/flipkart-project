import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../constant/apiUrl';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';

const Product = () => {

    const { id } = useParams();
    const [productDetail, setProductDetail] = useState([]);

    const requiredProductDetails = async () => {
        let { data } = await axios.get(`${baseUrl}/product/${id}`);
        setProductDetail(data.productDetails);
    }

    useEffect(() => {
        requiredProductDetails();
    },[id])

    console.log(productDetail)

    return (
        <Box className="" style={{}}>
            {
                productDetail.length !== 0 &&
                <Box style={{margin: '50px 100px'}}>
                    <Box className="row" style={{background: '#ffffff',}}>
                        <Box className="col-5" style={{}}>
                            <ActionItem productDetail={productDetail}/>
                        </Box>
                        <Box className="col-7" style={{}}>
                            <ProductDetail productDetail={productDetail}/>
                        </Box>
                    </Box>
                </Box>
            }
        </Box>
    )
}

export default Product; 