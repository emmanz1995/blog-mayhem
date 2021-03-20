import { USER_DATA, USER_ERROR } from "../types";

const initialState = {
    user: {},
    // loading: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_DATA:
        return {
            ...state,
            user: action.payload,
            // loading: false
        }
        case USER_ERROR:
        return {
            // loading: false,
            error: action.payload
        }
        default: return state
    }
};
