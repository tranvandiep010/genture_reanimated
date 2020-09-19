import { DATA_FAIL, DATA_SUCCESS, REFRESH_DATA } from '../actions/actionTypes';
import { User } from '../models/User';

//state không thay đổi, chỉ trả về giá trị cuối cùng
const userManagementReducers = (newData: User[], payload: any) => {
    switch (payload.type) {
        case DATA_FAIL:
            payload.action.callback()
            return {
                result: null,
                typeResult: payload.typeResult
            };
        case DATA_SUCCESS:
            payload.action.callback()
            return {
                result: payload.response,
                typeResult: payload.typeResult
            };
        default:
            return "";
    }
}

export default userManagementReducers;