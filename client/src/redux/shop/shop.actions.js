import ShopActionsTypes from './shop.types';
import { firestore, convertCollectionsSnapshoptToMap } from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSucces = collectionsMap => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
 return dispatch => {
    const collectionRef = firestore.collection('collections');
      dispatch(fetchCollectionsStart());

       collectionRef.get().then(
        snapshot => {
           const collectionsMap = convertCollectionsSnapshoptToMap(snapshot);
          dispatch(fetchCollectionsSucces(collectionsMap));
           // updateCollections(collectionMap)
          // this.setState({loading: false});
         }).catch(
             error => dispatch(fetchCollectionsFailure(error.message))
         ) 
 }
};

/* export const updateCollections = (collectionsMap) => ({
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
}); */