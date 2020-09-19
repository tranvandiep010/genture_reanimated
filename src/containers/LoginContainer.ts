import { connect } from 'react-redux';

//Actions
import { loginAction } from '../actions';
import Login from '../components/Login';

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
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;