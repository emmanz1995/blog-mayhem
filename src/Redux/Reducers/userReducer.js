import { USER_DATA, USER_ERROR, USERS_DATA, USERS_ERROR } from "../types";

const initialState = {
    user: {},
    users: []
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

        case USERS_DATA:
            return {
                ...state,
                users: action.payload,
            }
        case USERS_ERROR:
            return {
                error: action.payload
            }
        default: return state
    }
};
