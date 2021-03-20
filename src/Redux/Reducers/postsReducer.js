import { FETCH_POSTS, ADD_POST, POSTS_ERROR } from '../types';

const initialState = {
    posts: [],
    post: {},
    loading: true
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS:
        return {
            ...state,
            posts: action.payload,
            loading: false
        }

        case ADD_POST:
        return {
            ...state,
            post: action.payload,
            loading: false
        }

        case POSTS_ERROR:
        return {
            loading: false,
            error: action.payload
        }

        default: return state
    }
}
