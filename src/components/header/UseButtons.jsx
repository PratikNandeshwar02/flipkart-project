import { Badge, Box, Button, Popover, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "./header.css";
import LoginDialog from "./LoginDialog";
import { useState } from "react";

import { useNavigate } from "react-router-dom"

const UseButtons = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true);
    }
  
    return (
        <Box className="use__buttons">
                <Button variant="text" className="button login"
                    onClick={openDialog}
                >
                    Login
                </Button>
                
                <Box className="button">Become a Seller</Box>

                <Box className="button">More</Box>

                <Box className="button"
                    onClick={()=> navigate("/cart")}
                >
                    <Badge badgeContent={1} color='error' style={{marginRight: 10}}> 
                        <ShoppingCartIcon/>
                    </Badge>
                    Cart
                </Box>

                <LoginDialog open={open} setOpen={setOpen}/>
        </Box>
    )
}

export default UseButtons