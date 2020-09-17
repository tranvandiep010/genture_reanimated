import { all, call } from 'redux-saga/effects';

import { login } from './loginSagas';

export default function* rootSaga() {
    yield all([
        call(login),
    ]);
}