import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.superheroapi.com/api.php/3478346522268682/',
});

export default api;
