import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions

function* fetchNewSaga(action) {
    try {
        const response = yield axios.get('api/new');

        yield put({ type: 'SET_NEW', payload: response.data })
    } catch (error) {
        console.error(`erroe`, error);
    }
}

function* fetchNewAddSaga(action) {
    try {
        yield axios.post('api/new', action.payload);
        yield put({ type: 'FETCH_NEW' });
    } catch (err) {
        console.log(`err`, err);
    }
}
function* fetchNewDeleteSaga(action) {
    console.log("delete", action.payload);
    try {
        yield axios.delete(`/api/new/${action.payload}`);
        yield put({ type: 'FETCH_NEW' });
    } catch (err) {
        console.log(`err`, err);
    }
}
function* fetchUpdateNew(action) {
    try {
        yield axios.put(`/api/new/${action.payload}`);
        yield put({ type: 'FETCH_NEW' });
    } catch (err) {
        console.log(`err`, err);
    }
}



// worker Saga: will be fired on "LOGOUT" actions

function* newSaga() {
    yield takeEvery('FETCH_NEW', fetchNewSaga);
    yield takeEvery('ADD_NEW', fetchNewAddSaga);
    yield takeEvery('DELETE_NEW', fetchNewDeleteSaga);
    yield takeEvery('UPDATE_ANEW', fetchUpdateNew);
    

}


export default newSaga;