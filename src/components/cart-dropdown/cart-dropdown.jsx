import React from 'react';
import { connect } from 'react-redux'

import CustomBoutton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';
import { toggleCartitems, toggleCartItem } from '../../redux/cart/cart.actions';

import './cart-dropdown.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems.length ? cartItems.map(item => 
    <CartItem key={item.id} item={item}  />
    ) :
        <span className="empty-message">
            Your car items is empty
        </span>
    }
        <CustomBoutton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartItem())
        }}>
            GO TO CHECKOUT
        </CustomBoutton> 
    </div>

    </div>
)

/* const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
}) */

/* const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state) 
}) */

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));