/*
  Reference link
  1. https://www.showwcase.com/show/17921/how-do-i-handle-my-errors-professionally-using-axios
  2. https://dev.to/charlintosh/setting-up-axios-interceptors-react-js-typescript-12k5
*/
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

axios.interceptors.request.use((config: any) => {
  // console.log('config :>>', config);
  // const token = localStorage.getItem('token');
  // if (token) {
  //   const authorizationToken = token ? `Bearer ${token}` : '';
  //   config?.headers = authorizationToken;
  // }
  return config;
})

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    return Promise.reject(error.response?.data)
  }
);

export default axios;