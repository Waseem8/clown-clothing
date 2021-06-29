import React from 'react'
import CustomButton from '../costom-button/CustomButton'
import './cart-dropdown.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <CustomButton>GO TO CHACKOUT</CustomButton>
        </div>
    )
}

export default CartDropdown
