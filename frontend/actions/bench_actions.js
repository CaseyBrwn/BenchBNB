
import {getBenches} from '../util/bench_api_util';
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

const receiveBenches = (benches) => ({
    type: RECEIVE_BENCHES,
    benches: benches
});

export const fetchBenches = () => (dispatch) => {
    getBenches().then(benches => dispatch(receiveBenches(benches)));
};

