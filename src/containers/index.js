import { connect } from 'react-redux';

//Actions
import { loginAction } from '../actions';
import Login from '../components/Login';

const mapStateToProps = (state) => {
    return {
        user: state.loginReducers ? state.loginReducers : "",
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password, callback) => {
            dispatch(loginAction(username, password, callback));
        }
    };
}
const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginContainer;