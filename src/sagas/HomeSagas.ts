import { UPLOAD_FAIL, UPLOAD_FILE, UPLOAD_SUCCESS } from '../actions/actionTypes';

//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { call, put, takeEvery } from 'redux-saga/effects';
import homeServices from '../services/HomeServices';

function* uploadFileHandler(action: any) {
    try {
        console.log(action)
        const response = yield call(homeServices.uploadFile, action.uri, action.typeFile, action.name, action.size)
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