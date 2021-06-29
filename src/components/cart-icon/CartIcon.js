import React from 'react'
import './cart-icon.scss'
import { ReactComponent as ShoppingIcone } from '../../image/shopping-bag.svg'
import { connect } from 'react-redux'
import { toogleCartHidden } from '../../redux/cart/cart.actions'

const CartIcon = ({toogleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toogleCartHidden}>
            <ShoppingIcone className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}
const mapDispatchToProps= dispatch => ({
    toogleCartHidden : () => dispatch(toogleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)
