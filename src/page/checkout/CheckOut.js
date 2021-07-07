import React from 'react'
import './check-out.scss'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selecter'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import CheckoutItem from '../../components/checkout-item/CheckoutItem'
import StripButton from '../../components/strip-button/StripButton'
const CheckOut = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quatity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cardItems={cartItem}/>))
            }
            <div className='total'><span>Total: ${total}</span></div>
            <StripButton price={total}/>
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckOut)
