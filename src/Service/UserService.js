import axios from 'axios';

const API_URL = process.env.REACT_APP_MAIN_URL;
const token = localStorage.getItem('token');

// function getUser() {
//     return axios.get(`${API_URL}/wp-json/wp/v2/users/me`, {
//         headers: {
//             authorization: `Bearer ${token}`
//         }
//     })
//         .then((response) => {
//             if(response.status === 200) {
//                 localStorage.setItem('id', JSON.stringify(response.data.id));
//                 return response.data.id
//             }
//         })
// }
//
// export default {
//     getUser
// }
