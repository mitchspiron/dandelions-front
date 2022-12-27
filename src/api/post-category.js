import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/post-category";

export const getPostCategory = () => {
  return axios.get(`${URL}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const createPostCategory = (data) => {
  const newPostCategory = {
    nomCategorie: data.nomCategorie,
  };
  return axios.post(`${URL}`, newPostCategory, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updatePostCategoryById = (id, data) => {
  return axios.put(`${URL}/${id}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getPostCategoryById = (id) => {
  return axios.get(`${URL}/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getCategoryBySlug = (slug) => {
  return axios.get(`${URL}/post/${slug}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const deletePostCategoryById = (id) => {
  return axios.delete(`${URL}/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
