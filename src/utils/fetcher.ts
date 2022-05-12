import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';

const fetcher = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

fetcher.interceptors.response.use((response: AxiosResponse) => {
  if (response.data && response.headers['content-type'] === 'application/json; charset=utf-8') {
    response.data = camelizeKeys(response.data);
  }

  return response;
});

fetcher.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = { ...config };
  if (config.params) newConfig.params = decamelizeKeys(config.params);
  if (config.data) newConfig.data = decamelizeKeys(config.data);
  return newConfig;
});

export { fetcher };
