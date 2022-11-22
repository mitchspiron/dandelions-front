import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/comment";

export const createComment = (slug, data) => {
  const newPost = {
    idUtilisateur: data.idUtilisateur,
    contenu: data.contenu,
  };
  return axios.post(`${URL}/${slug}`, newPost, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getCommentByPost = (slug) => {
  return axios.get(`${URL}/post/${slug}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getCommentById = (id) => {
  return axios.get(`${URL}/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updateCommentById = (data) => {
  const form = { contenu: data.contenu };
  return axios.put(`${URL}/${data.idSelectUpdate}`, form, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const deleteCommentById = (id) => {
  return axios.delete(`${URL}/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
