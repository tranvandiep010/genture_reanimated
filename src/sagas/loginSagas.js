import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/actionTypes';

//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { call, put, takeEvery } from 'redux-saga/effects';
import loginServices from '../services/LoginServices';

function* loginHandler() {
    try {
        const response = yield call(loginServices.login, "abc", "bvcd")
        if (response) {
            console.log(response)
            yield put({
                type: LOGIN_SUCCESS,
                payload: JSON.stringify(response)
            });
        }
    } catch (e) {
        yield put({
            type: LOGIN_FAIL,
            payload: "abcdhjgerer"
        });
    }
}

export function* login() {
    yield takeEvery(LOGIN, loginHandler);
}