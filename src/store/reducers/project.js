/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
    projectDetails: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PROJECT_DETAILS:
            
            return state;
    }
    return state;
};

export default reducer;