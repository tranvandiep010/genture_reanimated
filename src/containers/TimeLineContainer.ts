import { connect } from 'react-redux';
import { getNextPageAction, refreshDataAction } from '../actions';
import { REFRESH_DATA } from '../actions/actionTypes';
import UserManagement from '../components/UserManagement';


const mapStateToProps = (state: any) => {
    return {
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
}
const TimeLineContainer = connect(mapStateToProps, mapDispatchToProps)(UserManagement);
export default TimeLineContainer;