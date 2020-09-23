import { takeLatest, call, put, all } from 'redux-saga/effects';
import ShopActionsTypes from './shop.types';
import { firestore, convertCollectionsSnapshoptToMap } from '../../firebase/firebase.utils';
import {
    fetchCollectionsSucces,
    fetchCollectionsFailure
} from './shop.actions';

export function* fetchCollectionsAsync(){
    yield console.log('I am fired');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshoptToMap,snapshot);
        yield put(fetchCollectionsSucces(collectionsMap));
    }catch(error){
        yield put(fetchCollectionsFailure(error.message));
    }

  

     /* collectionRef.get().then(
      snapshot => {
         const collectionsMap = convertCollectionsSnapshoptToMap(snapshot);
        dispatch(fetchCollectionsSucces(collectionsMap));
         // updateCollections(collectionMap)
        // this.setState({loading: false});
       }).catch(
           error => dispatch(fetchCollectionsFailure(error.message))
       )  */
}

export function* fetchCollectionsStart(){
    yield takeLatest(
        ShopActionsTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
        )
}

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)]);
}