import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions

function* fetchAboutSaga(action) {
    try {
        const response = yield axios.get('api/about');

        yield put({ type: 'SET_ABOUT', payload: response.data })
    } catch (error) {
        console.error(`erroe`, error);
    }
}

function* fetchAboutAddSaga(action) {
    try {
        yield axios.post('api/about', action.payload);
        yield put({ type: 'FETCH_ABOUT' });
    } catch (err) {
        console.log(`err`, err);
    }
}
function* fetchAboutDeleteSaga(action) {
    console.log("delete", action.payload);
    try {
        yield axios.delete(`/api/about/${action.payload}`);
        yield put({ type: 'FETCH_ABOUT' });
    } catch (err) {
        console.log(`err`, err);
    }
}
function* fetchUpdateAbout(action) {
    try {
        yield axios.put(`/api/about/${action.payload}`);
        yield put({ type: 'FETCH_ABOUT' });
    } catch (err) {
        console.log(`err`, err);
    }
}



// worker Saga: will be fired on "LOGOUT" actions

function* aboutSaga() {
    yield takeEvery('FETCH_ABOUT', fetchAboutSaga);
    yield takeEvery('ADD_ABOUT', fetchAboutAddSaga);
    yield takeEvery('DELETE_ABOUT', fetchAboutDeleteSaga);
    yield takeEvery('UPDATE_ABOUT', fetchUpdateAbout);
    

}


export default aboutSaga;