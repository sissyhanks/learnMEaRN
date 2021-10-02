import axios from 'axios';

const url = 'http://loclahost:3103/posts';

export const fetchPosts = () => axios.get(url);