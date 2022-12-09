import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/post";

export const getPost = (id) => {
  return axios.get(`${URL}/admin/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const filterPostVisitor = (data) => {
  const form = {
    searchkey: data.searchkey,
    searchCategory: data.searchCategory,
  };
  return axios.post(`${URL}/filter`, form, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const filterPost = (id, data) => {
  const form = {
    searchkey: data.searchkey,
    searchCategory: data.searchCategory,
    searchEtat: data.searchEtat,
  };
  return axios.post(`${URL}/admin/filter/${id}`, form, {
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

export const getUnseenPost = (id) => {
  return axios.get(`${URL}/unseen/${id}`, {
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

export const filterPublishedPostBySlug = (slug, data) => {
  const form = {
    searchkey: data,
  };
  return axios.post(`${URL}/published/filter/${slug}`, form, {
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

export const updateIllustrationBySlug = (slug, id, data) => {
  return axios.put(`${URL}/update-illustration/${slug}/${id}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updatePostBySlug = (slug, id, data) => {
  return axios.put(`${URL}/${slug}/${id}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updateStateBySlug = async (slug, data) => {
  return await axios.put(`${URL}/state/${slug}`, data, {
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

export const updatePostToSeen = async (slug) => {
  return await axios.put(`${URL}/to-seen/${slug}`, slug, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
