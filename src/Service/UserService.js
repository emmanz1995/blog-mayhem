import axios from 'axios';

const API_URL = process.env.REACT_APP_MAIN_URL;

function getUser() {
    return axios.get(`${API_URL}/wp-json/wp/v2/users/me`)
}

export default {
    getUser
}
