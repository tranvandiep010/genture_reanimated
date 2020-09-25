import { combineReducers } from 'redux';
import loginReducers from './LoginReducer';
import userManagementReducers from './UserManagementReducers';
import homeReducers from './HomeReducer';

const allReducers = combineReducers({
    loginReducers,
    userManagementReducers,
    homeReducers,
});
export default allReducers;