import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://backend-usinfosys.glitch.me/',
  });


export default instance;