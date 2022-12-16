import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/dashboard";

export const getAllCountUserByYear = (data) => {
  const form = { year: Number(data) };
  return axios.post(`${URL}/chart/users`, form, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getAllCountEnterpriseByYear = (data) => {
  const form = { year: data };
  return axios.post(`${URL}/chart/enterprises`, form, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getAllCountPostByYear = (data) => {
  const form = { year: data };
  return axios.post(`${URL}/chart/posts`, form, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getAllCountEventByYear = (data) => {
  const form = { year: data };
  return axios.post(`${URL}/chart/events`, form, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getAllCountUsers = () => {
  return axios.get(`${URL}/count/users`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getAllCountEnterprises = () => {
  return axios.get(`${URL}/count/enterprises`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getAllCountPosts = () => {
  return axios.get(`${URL}/count/posts`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getAllCountEvents = () => {
  return axios.get(`${URL}/count/events`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
