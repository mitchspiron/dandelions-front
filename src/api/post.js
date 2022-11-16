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
