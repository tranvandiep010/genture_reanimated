import { all, call } from 'redux-saga/effects';
import { uploadFile } from './HomeSagas';

import { login } from './loginSagas';
import { getNextPage, refreshData } from './userManagementSagas';

export default function* rootSaga() {
    yield all([
        call(login),
        call(refreshData),
        call(getNextPage),
        call(uploadFile),
    ]);
}