import { UPLOAD_FAIL, UPLOAD_FILE, UPLOAD_SUCCESS } from '../actions/actionTypes';

//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { call, put, takeEvery } from 'redux-saga/effects';
import homeServices from '../services/HomeServices';

function* uploadFileHandler(action) {
    console.log("upload file")
    try {
        const response = yield call(homeServices.login, action.uri, action.type, action.name, action.size)
        if (response) {
            yield put({
                type: UPLOAD_SUCCESS,
                action,
            });
        }
    } catch (e) {
        yield put({
            type: UPLOAD_FAIL,
            action
        });
    }
}

export function* uploadFile() {
    yield takeEvery(UPLOAD_FILE, uploadFileHandler);
}