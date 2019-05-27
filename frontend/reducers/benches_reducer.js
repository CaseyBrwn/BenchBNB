import {RECEIVE_BENCHES} from "../actions/bench_actions";
import {merge} from "lodash";

export const benchReducer = (oldstate = {}, action) => {
    Object.freeze(oldstate);
    switch(action.type){
        case RECEIVE_BENCHES:
            return action.benches;
        default: return oldstate;
    }

};

