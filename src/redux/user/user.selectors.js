import { createSelector} from 'reselect';

const selectUser = state => state.user;

const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(
   // [selectUser, selectCart], like an array or
   [selectUser],
 //  selectCart, 
    (user) => user.currentUser
)