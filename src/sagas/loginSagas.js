import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/actionTypes';

//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { call, put, takeEvery } from 'redux-saga/effects';
import loginServices from '../services/LoginServices';
import loginActions from '../actions/index'

function* loginHandler(action) {
    try {
        const response = yield call(loginServices.login, action.username, action.password)
        if (response) {
            yield put({
                type: LOGIN_SUCCESS,
                action,
            });
        }
    } catch (e) {
        yield put({
            type: LOGIN_FAIL,
            action
        });
    }
}

export function* login() {
    yield takeEvery(LOGIN, loginHandler);
}