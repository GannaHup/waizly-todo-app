import axios from "axios";

export const httpService = axios.create({
  baseURL: process.env.WEATHER_API,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => config,
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response,
  function (error) {
    return Promise.reject(error);
  }
);
