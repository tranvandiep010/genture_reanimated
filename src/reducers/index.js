import { combineReducers } from 'redux';
import loginReducers from './LoginReducer';
import userManagementReducers from './UserManagementReducers'

const allReducers = combineReducers({
    loginReducers,
    userManagementReducers,
});
export default allReducers;