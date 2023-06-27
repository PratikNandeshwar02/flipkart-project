import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../constant/apiUrl';

const BannerCarousel = () => {

    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        const requiredBannerData = async () => {
            let { data } = await axios.get(`${baseUrl}/banner-data`)
            setBannerData(data.bannerData)
        };
        requiredBannerData();
    },[]);

        
    const responsive = {
        desktop: { 
            breakpoint: { max: 3000, min: 1024 }, 
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Carousel 
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10000} 
            keyBoardControl={true}
            showDots={false}
            slidesToSlide={1}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                bannerData?.map(data => {
                    return(
                        <img key={data.id} src={data.url} alt="bannerImg" />
                    )
                })
            }
    
        </Carousel>
        
    )
}

export default BannerCarousel;