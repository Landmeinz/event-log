import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';



function* fetchEventLog() {
    console.log('--- in fetchEventLog Saga ---');

    try {
        const response = yield axios.get('/api/events')
        // console.log('--- fetchPlants saga response.data', response.data);

        yield put({ type: 'SET_EVENT_LOG', payload: response.data })

    } catch (error) {
        console.log('ERROR fetchEventLog Saga', error);
    }
}; // fetchEventLog



function* eventLogSaga() {
    yield takeLatest('FETCH_EVENT_LOG', fetchEventLog)
}; // currentDateSaga

export default eventLogSaga;