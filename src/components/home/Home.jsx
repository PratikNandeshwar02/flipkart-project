import React, { useEffect, useState } from 'react'
import { Box } from "@mui/material"
import BannerCarousel from './BannerCarousel';
import NavBar from './NavBar';

import "./home.css";
import Slide from './Slide';
import axios from 'axios';
import { baseUrl } from '../../constant/apiUrl';
import AddSlide from './AddSlide';
import SlideMix from './SlideMix';
import MidAddSlide from './MidAddSlide';
import Footer from '../footer/Footer';


const Home = () => {

    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const requiredProductData = async () => {
            let { data } = await axios.get(`${baseUrl}/product-data`)
            setProductData(data.productData)
        };
        requiredProductData();
    },[])

    return (      
        <Box className="home">
            <NavBar/>
            <BannerCarousel/>
            <SlideMix productData={productData} timer={true} title="Best of Electronics" url="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"/>
            <Slide productData={productData} title="Home & Kitchen Essentials" url="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/b84f1c22cce1a6a3.jpg?q=90"/>
            <MidAddSlide/>
            <Slide productData={productData} title="Beauty, Food & More" url="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/898b527fdf29b17a.jpg?q=90"/>
            <Slide productData={productData} title="Top Deals On TV & Appliances" url="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/964e5530abdf3180.jpg?q=90"/>
            <AddSlide productData={productData} title="Pick Your Styles" url="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/ae3cf1d27ef0eabc.jpg?q=90"/>
            <Footer/>
        </Box>
        
    )
}

export default Home;