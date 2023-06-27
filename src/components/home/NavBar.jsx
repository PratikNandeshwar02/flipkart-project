import { useEffect, useState } from "react";
import axios from 'axios';
import { baseUrl } from "../../constant/apiUrl";

import "./home.css";
import { Box } from "@mui/material";


const NavBar = () => {
    const [navdata, setNavData] = useState([]);

    useEffect(() => {
        const requiredNavData = async () => {
            let { data } = await axios.get(`${baseUrl}/nav-data`)
            setNavData(data.navDataList)
        };
        requiredNavData();
    },[])

    return (
         <div className="" style={{background: '#fff', marginBottom: 10}}>
            <div className="components " style={{display: 'flex', marginLeft: 90, marginRight: 130, padding: "15px 20px"}}>
                {
                    navdata?.map((data, index) => {
                        return(
                            <Box key={index} className="img_box" style={{}}>
                                <img src={data.url} alt="navImg" />
                                <Box className="fw-bold">{data.text}</Box>
                            </Box>
                        )
                    })
                }
            </div>
         </div>
    )
}

export default NavBar;