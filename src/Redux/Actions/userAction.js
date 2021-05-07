import { USER_DATA, USER_ERROR, USERS_DATA, USERS_ERROR } from '../types';
import axios from 'axios';

const API_URL = process.env.REACT_APP_MAIN_URL;
const token = localStorage.getItem('token');

export const getUser = () => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/wp-json/wp/v2/users/me?context=edit`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        localStorage.setItem('id', JSON.stringify(response.data.id));
        dispatch({
            type: USER_DATA,
            payload: response.data,
        })
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err
        })
    }
}

export const getAllUsers = () => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/wp-json/wp/v2/users/context=edit`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        dispatch({
            type: USER_DATA,
            payload: response.data
        })
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err
        })
    }
}
