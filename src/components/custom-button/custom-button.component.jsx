import React from 'react';

import {CustomButtonContainer} from './custom-button.styles.js';

//import './custom-buttom.styles.scss';


const CustomButton = ({
  children,
  ...otherProps
}) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
