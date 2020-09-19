import { GET_MORE_DATA, LOGIN, LOGIN_FAIL, REFRESH_DATA } from './actionTypes';

export const loginAction = (username: string, password: string, callback) => {
    return {
        type: LOGIN,
        username: username,
        password: password,
        callback: callback,
    }
}

export const refreshDataAction = (callback) => {
    return {
        type: REFRESH_DATA,
        callback
    }
}

export const getNextPageAction = (currPage: Number, callback) => {
    return {
        type: GET_MORE_DATA,
        currPage: currPage,
        callback: callback,
    }
}