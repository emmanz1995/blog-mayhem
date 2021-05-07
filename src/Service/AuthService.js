import axios from 'axios';
import { BehaviorSubject } from 'rxjs';
import jwtDecode from "jwt-decode";

const API_URL = process.env.REACT_APP_MAIN_URL;

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('userInfo')));

function onSignin(username, password)
{
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
            localStorage.setItem('userInfo', JSON.stringify(response.data));
            currentUserSubject.next(response)
        }
        // console.log(response.data)
        // return response.data;
        return response;
    });
}

function getUserInfo() {
   return JSON.parse(localStorage.getItem('userInfo'));
}

function onSignout() {
    localStorage.clear();
    currentUserSubject.next(null);
}

// function decodedToken() {
//     const { token } = currentUserSubject;
//     let decode = jwtDecode(token);
// }

export const AuthService = {
    getUserInfo,
    onSignout,
    // decodedToken,
    onSignin,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () {
        return currentUserSubject.value
    }
};
