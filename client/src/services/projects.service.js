import axios from 'axios';

const API_URL = 'http://0.0.0.0:81';

axios.defaults.baseURL = API_URL;

export const ProjectsService = {
  async getAll() {
    return axios.get('/projects/');
  },
  async getProject(id) {
    return axios.get(`/projects/${id}`);
  },
};
