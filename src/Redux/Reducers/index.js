import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import userReducer from './userReducer'

export default combineReducers({
    postData: postsReducer,
    addPost: postsReducer,
    userData: userReducer
})
