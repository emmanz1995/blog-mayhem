import { FETCH_POSTS, POSTS_ERROR } from '../types';
import axios from 'axios';

export const getPosts = () => async dispatch => {
    const API_URL = process.env.REACT_APP_MAIN_URL;
    try {
        const response = await axios.get(`${API_URL}/wp-json/wp/v2/posts`);
        dispatch({
            type: FETCH_POSTS,
            payload: response.data
        })
    } catch(err) {
        dispatch({
            type: POSTS_ERROR,
            payload: err
        })
    }
}
