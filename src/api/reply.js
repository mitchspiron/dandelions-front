import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/response";

export const createResponse = (id, data) => {
  const newReply = {
    idUtilisateur: data.idUtilisateur,
    contenu: data.contenu,
  };
  return axios.post(`${URL}/${id}`, newReply, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getResponseByComment = (id) => {
  return axios.get(`${URL}/comment/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getUnseenResponse = (id) => {
  return axios.get(`${URL}/unseen/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updateResponseToSeen = (id) => {
  return axios.put(`${URL}/to-seen/${id}`, id, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updateResponseById = (data) => {
  const form = { contenu: data.contenu };
  return axios.put(`${URL}/${data.idSelectUpdate}`, form, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const deleteResponseById = (id) => {
  return axios.delete(`${URL}/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
