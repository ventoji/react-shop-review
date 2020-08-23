import React from 'react';

import CustomBoutton from '../custom-button/custom-button';

import './cart-dropdown.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
    <div className='cart-items'>
        <CustomBoutton>
            GO TO CHECKOUT
        </CustomBoutton> 
    </div>

    </div>
)

export default CartDropdown;