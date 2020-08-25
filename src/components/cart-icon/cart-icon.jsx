import React from 'react';
import { connect } from 'react-redux';

import { toggleCartItem } from '../../redux/cart/cart.actions.js'

import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.scss';

const CartIcon = ({toggleCartItem, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartItem}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

/* const mapStateToProps = ({cart: {cartItems}}) => ({
    itemCount: cartItems.reduce((accumulatedQuantity,cartItem)=>
        accumulatedQuantity + cartItem.quantity
    ,0)
})
 */
const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})
const mapDispatchToProps = (dispatch) => ({
 toggleCartItem: () => dispatch(toggleCartItem())
});

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);