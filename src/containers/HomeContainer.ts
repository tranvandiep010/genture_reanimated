import { connect } from 'react-redux';
import Home from '../components/Home';

const mapStateToProps = (state: any) => {
    return {
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
}
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
export default HomeContainer;