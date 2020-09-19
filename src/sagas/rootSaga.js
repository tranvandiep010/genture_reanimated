import { all, call } from 'redux-saga/effects';

import { login } from './loginSagas';
import { getNextPage, refreshData } from './userManagementSagas';

export default function* rootSaga() {
    yield all([
        call(login),
        call(refreshData),
        call(getNextPage),
    ]);
}