import { Box } from '@mui/material';

import "./home.css"
import SliderAdd from "./SliderAdd";
import SlideHeading from "./SlideHeading";
import AddSlide from "./AddSlide";

const SlideMix = ({ productData, title, url }) => {
   
    return (
        <Box  style={{marginTop: 10, background: '#ffffff', marginTop: 10}} className="d-flex row">
            <span className='col-2'><SlideHeading title={title} url={url}/></span>
            <span className='col-8'><AddSlide productData={productData} timer={true} /></span>
            <span className='col-2'><SliderAdd/></span>
        </Box>
    )
}

export default SlideMix; 