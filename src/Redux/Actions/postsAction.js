import { FETCH_POSTS, POSTS_ERROR, ADD_POST } from '../types';
import axios from 'axios';
import jwtDecode from "jwt-decode";

const API_URL = process.env.REACT_APP_MAIN_URL;
const token = localStorage.getItem('token');
const id = localStorage.getItem('id');

// const decoded = jwtDecode(token);
// console.log(decoded);
// const userId = decoded.data.user.id
// console.log(userId);

export const getPosts = () => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/wp-json/wp/v2/posts?author=${id}`);
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

export const addPost = () => async dispatch => {
    try {
        const response = await axios.post(`${API_URL}/wp-json/wp/v2/posts`,{
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token}`
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
