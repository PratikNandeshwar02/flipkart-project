import { Box, Typography } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import "./home.css";
import SliderContent from './SlideMix';
import SliderAdd from './SliderAdd';
import { Link } from 'react-router-dom';
import SlideHeading from './SlideHeading';
import AddSlide from './AddSlide';

const Slide = ({ productData, add, title, url }) => {

    const responsive = {
        desktop: { 
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='row 'style={{background: '#ffffff', marginTop: 10}}>
            <span className='col-2' style={{width: ''}}> <SlideHeading title={title} url={url}/></span>
            <span className='col-10' style={{width: ''}}><AddSlide productData={productData}/></span>
        </div>
    )
};

export default Slide;  