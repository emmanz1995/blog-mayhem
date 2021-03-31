import axios from 'axios';
import { useHistory } from 'react-router-dom';


const API_URL = process.env.REACT_APP_MAIN_URL;

function onSignin(username, password) {
    return axios.post(`${API_URL}/wp-json/jwt-auth/v1/token`, {
        username,
        password,
        headers: {
            'content-type': 'application/json'
        }
    })
    .then((response) => {
        if(response.data.token) {
            const { token } = response.data;
            localStorage.setItem('token', token);
            // localStorage.setItem('userInfo', JSON.stringify(response.data));
        }
        // console.log(response.data)
        return response.data;
    });
}

function getUserInfo() {
   return JSON.parse(localStorage.getItem('userInfo'));
}

// function Signout() {
//     const history = useHistory();
//     localStorage.clear();
//     history.push('/')
// }

export default {
    onSignin,
    getUserInfo,
    // Signout
};
