import {connect} from 'react-redux';
import {fetchBenches} from '../../actions/bench_actions';
import Search from './search';


const mapStateToProps = (state) => {
    let benches = Object.values(state.entities.benches);

    return ({
        benches: benches
    });
};

const mapDispatchToProps = (dispatch) => {

    return ({
        fetchBenches: () => dispatch(fetchBenches())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);