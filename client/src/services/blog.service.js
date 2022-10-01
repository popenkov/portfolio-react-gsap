import axios from 'axios';

const API_URL = 'http://0.0.0.0:81';

axios.defaults.baseURL = API_URL;

export const BlogService = {
  async getAll() {
    return axios.get('/posts/');
  },
  async getPost(id) {
    return axios.get(`/posts/${id}`);
  },
};
