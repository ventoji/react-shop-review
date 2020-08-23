import React from 'react';
import { connect } from 'react-redux';

import { toggleCartItem } from '../../redux/cart/cart.actions.js'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';

const CartIcon = ({toggleCartItem}) => (
    <div className='cart-icon' onClick={toggleCartItem}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
 toggleCartItem: () => dispatch(toggleCartItem())
});

export default connect(null,mapDispatchToProps)(CartIcon);