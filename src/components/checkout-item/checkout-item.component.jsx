import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeItemFromCart,addItem,removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem,removeItemFromCart, removeItem,addItem }) => {
    const { imageUrl, name, quantity, price } = cartItem;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={()=> removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=> addItem(cartItem)}>&#10095;</div>
                </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);