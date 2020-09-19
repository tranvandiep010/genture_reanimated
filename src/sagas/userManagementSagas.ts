import { DATA_FAIL, DATA_SUCCESS, GET_MORE_DATA, REFRESH_DATA } from '../actions/actionTypes';

//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { call, put, takeEvery } from 'redux-saga/effects';
import userManagementService from '../services/UserManagementServices';

function* refreshDataHandler(action: any) {
    try {
        const response = yield call(userManagementService.getUserByPage, 1, 10, "inc")
        if (response) {
            yield put({
                type: DATA_SUCCESS,
                action: action,
                response: response,
                typeResult: REFRESH_DATA,
            });
        }
    } catch (e) {
        yield put({
            type: DATA_FAIL,
            action: action,
            typeResult: REFRESH_DATA
        });
    }
}

export function* refreshData() {
    yield takeEvery(REFRESH_DATA, refreshDataHandler);
}

function* getNextPageHandler(action: any) {
    try {
        const response = yield call(userManagementService.getUserByPage, action.currPage + 1, 10, "inc")
        if (response) {
            yield put({
                type: DATA_SUCCESS,
                action,
                response: response,
                typeResult: GET_MORE_DATA
            });
        }
    } catch (e) {
        yield put({
            type: DATA_FAIL,
            action,
            typeResult: GET_MORE_DATA
        });
    }
}

export function* getNextPage() {
    yield takeEvery(GET_MORE_DATA, getNextPageHandler);
}