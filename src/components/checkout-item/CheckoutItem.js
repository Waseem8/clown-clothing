import React from 'react'
import { connect } from 'react-redux'
import './checkout-item.scss'
import { AddItem, ClearItemFromCart, RemoveItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({cardItems, ClearItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity }= cardItems
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=>removeItem(cardItems)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=>addItem(cardItems)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={()=>ClearItem(cardItems)}>&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch=> ({
    ClearItem: item => dispatch(ClearItemFromCart(item)),
    addItem: item => dispatch(AddItem(item)),
    removeItem: item => dispatch(RemoveItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem)
