import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "LOGIN" actions

function* fetchEventSaga(action) {
    try {
        const response = yield axios.get('api/event');

        yield put({ type: 'SET_EVENT', payload: response.data })
    } catch (error) {
        console.error(`erroe`, error);
    }
}

function* fetchEventAddSaga(action) {
    try {
        yield axios.post('api/event', action.payload);
        yield put({ type: 'FETCH_EVENT' });
    } catch (err) {
        console.log(`err`, err);
    }
}
function* fetchEventDeleteSaga(action) {
    console.log("delete", action.payload);
    try {
        yield axios.delete(`/api/event/${action.payload}`);
        yield put({ type: 'FETCH_EVENT' });
    } catch (err) {
        console.log(`err`, err);
    }
}
function* fetchUpdateEvent(action) {
    try {
        yield axios.put(`/api/event/${action.payload}`);
        yield put({ type: 'FETCH_EVENT' });
    } catch (err) {
        console.log(`err`, err);
    }
}



// worker Saga: will be fired on "LOGOUT" actions

function* eventSaga() {
    yield takeEvery('FETCH_EVENT', fetchEventSaga);
    yield takeEvery('ADD_EVENT', fetchEventAddSaga);
    yield takeEvery('DELETE_EVENT', fetchEventDeleteSaga);
    yield takeEvery('UPDATE_EVENT', fetchUpdateEvent);
    

}


export default eventSaga;