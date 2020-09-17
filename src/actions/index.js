import { LOGIN, LOGIN_FAIL } from './actionTypes';

export const loginAction = (username, password, callback) => {
    return {
        type: LOGIN,
        username: username,
        password: password,
        callback: callback,
    }
}