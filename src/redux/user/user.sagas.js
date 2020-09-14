import {takeLatest, put, all, call} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import { 
    auth, 
    googleProvider, 
    createUserProfileDocument,
    getCurrentuser 
} from '../../firebase/firebase.utils';
import { 
    signInSuccess, 
    signInFailure, 
    signOutSuccess, 
    signOutFailure
} from './user.actions';


export function* getSnapshotFromUserAuth(userAuth){
    try{
        const userRef = yield call(createUserProfileDocument, userAuth);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({id: userSnapshot.id,...userSnapshot.data()}))
      //  console.log(user);
    }catch(error){
        yield put(signInFailure(error));
    }
}


export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
       yield getSnapshotFromUserAuth(user)
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* isUserAuthenticated(){
    try{
        const userAuth = yield getCurrentuser();
        if(!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield (put(signOutSuccess()))
    }catch(error){
        yield (put(signOutFailure()))
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* signInWithEmail({payload: {email, password}}){
 
    try{
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)
    }catch(error){
        yield put(signInFailure(error));
    }
}

export function* onEmailSingInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}


export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated );
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSingInStart), 
        call(onCheckUserSession),
        call(onSignOutStart), 
    ]);
}