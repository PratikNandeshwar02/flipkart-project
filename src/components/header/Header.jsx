import "./header.css"

import { AppBar, Toolbar } from "@mui/material"
import Logo from "./Logo"
import Search from "./Search"
import UseButtons from "./UseButtons"

const Header = () => {


    
    return (
        <AppBar className="header" >
            <Toolbar style={{minHeight: 55, }}>
                <Logo/>
                <Search/>
                <UseButtons/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;