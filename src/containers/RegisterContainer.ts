import { connect } from 'react-redux';

//Actions
import { loginAction } from '../actions';
import Register from '../components/Register';

const mapStateToProps = (state: any) => {
    return {
        times: state.loginReducers ? state.loginReducers : "",
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onLogin: (username: string, password: string, callback: any) => {
            dispatch(loginAction(username, password, callback));
        }
    };
}
const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
export default RegisterContainer;