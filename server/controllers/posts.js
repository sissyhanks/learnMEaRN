import PostMessage from '../models/postMessage.js';

export const getPosts = (req, res) => {
  res.send('that worked');
}

export const createPost = (req, res) => {
  res.send('post creation')
}