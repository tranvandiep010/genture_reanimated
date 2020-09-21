import { connect } from 'react-redux';
import TimeLine from '../components/TimeLine';


const mapStateToProps = (state: any) => {
    return {
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
}
const TimeLineContainer = connect(mapStateToProps, mapDispatchToProps)(TimeLine);
export default TimeLineContainer;