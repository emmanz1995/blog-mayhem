import { FETCH_POSTS, POSTS_ERROR, ADD_POST } from '../types';
import axios from 'axios';

const API_URL = process.env.REACT_APP_MAIN_URL;

export const getPosts = () => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/wp-json/wp/v2/posts?author=${1}`);
        dispatch({
            type: FETCH_POSTS,
            payload: response.data,
        })
    } catch(err) {
        dispatch({
            type: POSTS_ERROR,
            payload: err
        })
    }
}

export const addPost = (postData) => async dispatch => {
    try {
        const response = await axios.post(`${API_URL}/wp-json/wp/v2/posts`, postData,{
            headers: {
                'content-type': 'application/json'
            }
        });
        dispatch({
            type: ADD_POST,
            payload: ({
                postAdded: !! response.data.id,
            })
        })
    } catch (err) {

    }
}
