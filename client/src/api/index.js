import axios from 'axios';

const url = 'http://localhost:3103/posts';

export const fetchPosts = () => axios.get(url);