import axios from 'axios';

const API_URL = process.env.REACT_APP_MAIN_URL;

function getPosts() {
    return axios.get(`${API_URL}/wp-json/wp/v2/posts`)
    // .then((response) => {
    //     if(response.status === 200) {
    //         return response.data
    //     }
    // })
}

export default {
    getPosts
}
