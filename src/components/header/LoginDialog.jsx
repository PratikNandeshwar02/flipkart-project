import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import "./header.css";

const LoginDialog = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Box className="login__dialogBox">
                {/* image side */}
                <Box className="dialog_imageBox">
                    <Typography variant="h5" className="dialog__heading">SignUp</Typography>
                    <Typography style={{marginTop: 20}} className="dialog__subHeading">Sign up with your mobile number to get started</Typography>
                </Box>

                {/* form side */}
                <Box className="dialog__form">
                    <TextField variant='standard'  name='username'  label='Enter your Username'/>

                    <TextField variant='standard'  name='password'  label='Enter Password'/>


                    <Box className='smallText'>By, continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Box>

                    <Button className="login__Button">Login</Button>

                    <Typography style={{ textAlign: 'center'}}>OR</Typography>
                    <Button className="request__Button">Request OTP</Button >

                    <Typography className="create__Account">New to Flipkart? Create an account</Typography>

                </Box>
                {/* form end */}
            </Box>
        </Dialog>
    )
}

export default LoginDialog;