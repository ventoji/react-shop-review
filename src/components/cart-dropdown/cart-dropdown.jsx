import React from 'react';
import { connect } from 'react-redux'

import CustomBoutton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems.map(item => 
    <CartItem key={item.id} item={item}  />
    )}
        <CustomBoutton>
            GO TO CHECKOUT
        </CustomBoutton> 
    </div>

    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);