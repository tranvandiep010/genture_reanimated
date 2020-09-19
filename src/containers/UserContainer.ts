import { connect } from 'react-redux';
import { getNextPageAction, refreshDataAction } from '../actions';
import { REFRESH_DATA } from '../actions/actionTypes';
import UserManagement from '../components/UserManagement';


const mapStateToProps = (state: any) => {
    return {
        newData: state.userManagementReducers.result ? state.userManagementReducers.result : null,
        isRefresh: state.userManagementReducers.typeResult == REFRESH_DATA ? true : false
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        refreshData: (callback: any) => {
            dispatch(refreshDataAction(callback))
        },
        getNextData: (currPage: number, callback: any) => {
            dispatch(getNextPageAction(currPage, callback))
        }
    };
}
const UserManagementContainer = connect(mapStateToProps, mapDispatchToProps)(UserManagement);
export default UserManagementContainer;