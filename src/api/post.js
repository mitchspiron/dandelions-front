import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/post";

export const getPost = () => {
  return axios.get(`${URL}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getPublishedPost = () => {
  return axios.get(`${URL}/published`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const takeFirstLastestPost = () => {
  return axios.get(`${URL}/take-first-post`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const skipFirstLastestPost = () => {
  return axios.get(`${URL}/skip-first-post`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getRecommandedPost = () => {
  return axios.get(`${URL}/recommanded`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getTopPost = () => {
  return axios.get(`${URL}/top`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getPostBySlug = (slug) => {
  return axios.get(`${URL}/${slug}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getPublishedPostBySlug = (slug) => {
  return axios.get(`${URL}/published/${slug}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const createPost = (data) => {
  const newPost = {
    idRedacteur: data.idRedacteur,
    idCategorie: data.idCategorie,
    titre: data.titre,
    description: data.description,
    illustration: data.illustration,
    contenu: data.contenu,
  };
  return axios.post(`${URL}`, newPost, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const uploadedFile = (data) => {
  return axios.post(`${URL}/upload-illustration`, data, {
    withCredentials: true,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updateIllustrationBySlug = (slug, data) => {
  return axios.put(`${URL}/update-illustration/${slug}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updatePostTitleBySlug = (slug, data) => {
  return axios.put(`${URL}/title/${slug}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updatePostBySlug = (slug, data) => {
  return axios.put(`${URL}/${slug}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updateStateBySlug = (slug, data) => {
  return axios.put(`${URL}/state/${slug}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const switchToRecommandedBySlug = (slug, data) => {
  return axios.put(`${URL}/switch-recommanded/${slug}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const switchTopBySlug = (slug, data) => {
  return axios.put(`${URL}/switch-top/${slug}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
