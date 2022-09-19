import axios from 'axios';

const API_URL = 'http://localhost:4444';

axios.defaults.baseURL = API_URL;

export const BlogService = {
  async getAll() {
    return axios.get('/posts/');
  },
  async getPost(id) {
    return axios.get(`/posts/${id}`);
  },
};
