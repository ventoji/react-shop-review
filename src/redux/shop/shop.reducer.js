// import SHOP_DATA from './shop.data';

import ShopActionsTypes from './shop.types';
import { truncate } from 'lodash';


const INITIAL_STATE = {
  collections: null, //SHOP_DATA
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: truncate
      }
    case ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case ShopActionsTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    
    case ShopActionsTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      }
    default:
      return state;
  }
};

export default shopReducer;
