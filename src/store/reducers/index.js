import * as types from '../constants/index';

const initialState = {
    constructor: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_CONSTRUCTOR:
            return {
                ...state,
                constructor: action.payload
            };


        default:
            return state;
    }
};

export default reducer;