import React from 'react'

import { ButtonGroup, Button, Box } from '@mui/material';

const CartButtons = () => {
    return (
        <ButtonGroup style={{marginTop: '30px'}}>
            <Button style={{borderRadius: '50%', fontWeight: 600}}>-</Button>
            <Button disabled>1</Button>
            <Button style={{borderRadius: '50%', fontWeight: 600}}>+</Button>
        </ButtonGroup>
    )
}

export default CartButtons; 