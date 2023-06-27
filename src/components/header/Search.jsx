import { Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import "./header.css";
import { useState } from 'react';


const Search = () => {

    const [text, setText] = useState('');

    return (
        <Box className="inputBox">
            <InputBase
                placeholder='Search for products, brands and more'
                className='inputSearchBase'
            />
            <Box className="searchIconWrapper">
                <SearchIcon/>
            </Box>
        </Box>
    )
}

export default Search; 