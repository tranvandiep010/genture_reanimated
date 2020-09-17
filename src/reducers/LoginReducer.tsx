import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/actionTypes';

//state không thay đổi, chỉ trả về giá trị cuối cùng
const loginReducers = (times: any, action: any) => {
    switch (action.type) {
        case LOGIN_FAIL:
            if (action.callback)
                action.callback();
            return "Fail";
        case LOGIN_SUCCESS:
            if (action.callback)
                action.callback();
            return "success" + action.payload;
        default:
            return "";
    }
}

export default loginReducers;