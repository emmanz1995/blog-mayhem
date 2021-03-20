import { USER_DATA, USER_ERROR } from '../types';
import axios from 'axios';
// import { useSelector } from "react-redux";

const API_URL = process.env.REACT_APP_MAIN_URL;
const token = localStorage.getItem('token');
// const userData = useSelector(state => state.userData)

export const getUser = () => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/wp-json/wp/v2/users/me`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
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
