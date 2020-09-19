import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/actionTypes';

//state không thay đổi, chỉ trả về giá trị cuối cùng
const loginReducers = (times = 0, payload: any) => {
    //console.log(payload)
    switch (payload.type) {
        case LOGIN_FAIL:
            payload.action.callback()
            return "Fail";
        case LOGIN_SUCCESS:
            payload.action.callback()
            return "success";
        default:
            return "";
    }
}

export default loginReducers;