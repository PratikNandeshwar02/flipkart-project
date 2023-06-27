import { Box, Typography } from "@mui/material";
import "./header.css";
import { Link } from 'react-router-dom'

const Logo = () => {
    const flipkartLogo = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const plusLogo = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png'

    return (
        <Link to="/" style={{color: "inherit"}} className="component">
            <img src={flipkartLogo} alt="mainlogo" style={{width: 75}}/>
            <Box style={{display: 'flex',}}>
                <Typography className="subheading">
                    <Box component='span' style={{ fontSize: 10, fontStyle: "italic"}}>Explore &nbsp;</Box>
                    <Box component='span' style={{color: '#f1e500', fontSize: 10, fontStyle: "italic"}}>Plus</Box>
                </Typography>
                <img src={plusLogo} alt="sublogo" className="plusImage"/>
            </Box>
        </Link>
    )
}

export default Logo