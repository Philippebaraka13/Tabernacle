import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions

function* fetchPictureSaga(action) {
    try {
        const response = yield axios.get('api/picture');

        yield put({ type: 'SET_PICTURE', payload: response.data })
    } catch (error) {
        console.error(`erroe`, error);
    }
}

function* fetchPictureAddSaga(action) {
    try {
        yield axios.post('api/picture', action.payload);
        yield put({ type: 'FETCH_PICTURE' });
    } catch (err) {
        console.log(`err`, err);
    }
}
function* fetchPictureDeleteSaga(action) {
    console.log("delete", action.payload);
    try {
        yield axios.delete(`/api/picture/${action.payload}`);
        yield put({ type: 'FETCH_PICTURE' });
    } catch (err) {
        console.log(`err`, err);
    }
}
function* fetchUpdatePicture(action) {
    try {
        yield axios.put(`/api/picture/${action.payload}`);
        yield put({ type: 'FETCH_PICTURE' });
    } catch (err) {
        console.log(`err`, err);
    }
}



// worker Saga: will be fired on "LOGOUT" actions

function* pictureSaga() {
    yield takeEvery('FETCH_PICTURE', fetchPictureSaga);
    yield takeEvery('ADD_PICTURE', fetchPictureAddSaga);
    yield takeEvery('DELETE_PICTURE', fetchPictureDeleteSaga);
    yield takeEvery('UPDATE_PICTURE', fetchUpdatePicture);


}


export default pictureSaga;