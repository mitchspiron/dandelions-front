import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/evenement";

export const getEvenementAdmin = (id) => {
  return axios.get(`${URL}/admin/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getEvenement = () => {
  return axios.get(`${URL}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getFourLastEvenement = () => {
  return axios.get(`${URL}/four-last`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getEvenementBySlug = (slug) => {
  return axios.get(`${URL}/${slug}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const createEvenement = (data) => {
  const newEvent = {
    idEntreprise: data.idEntreprise,
    titre: data.titre,
    illustration: data.illustration,
    description: data.description,
    contenu: data.contenu,
    deadline: data.deadline,
    onSubscribe: data.onSubscribe,
  };
  return axios.post(`${URL}`, newEvent, {
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

export const updateEvenementBySlug = (slug, id, data) => {
  return axios.put(`${URL}/${slug}/${id}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const switchOnHeaderBySlug = (slug, data) => {
  return axios.put(`${URL}/switch-header/${slug}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const switchOnSubscribeBySlug = (slug, data) => {
  return axios.put(`${URL}/switch-subscribed/${slug}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
