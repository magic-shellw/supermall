import axios from 'axios';

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 2000
  });

  instance.interceptors.request.use(config => {
    return config;
  }, err => {
    console.log(err);
  });

  instance.interceptors.response.use(response => {
    return response;
  }, err => {
    console.log(err);
  })

  return instance(config);
}

export function myRequest(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 3000
  });
  return instance(config);
}