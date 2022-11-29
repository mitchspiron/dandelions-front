import axios from "axios";
import { BASE_URL } from "../configs";
import { axiosInstanceUser } from "./config";

const URL = BASE_URL + "/enterprise";

export const getEnterprise = () => {
  return axios.get(`${URL}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getEnterpriseAdmin = (id) => {
  return axios.get(`${URL}/admin/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const filterEnterpriseAdmin = (id, data) => {
  const form = { searchkey: data };
  return axios.post(`${URL}/admin/filter/${id}`, form, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const createEnterprise = (data) => {
  const newEnterprise = {
    idRedacteur: data.idRedacteur,
    illustration: data.illustration,
    nom: data.nom,
    brand: data.brand,
    email: data.email,
    telephone: data.telephone,
    anneeCreation: data.anneeCreation,
    urlWebsite: data.urlWebsite,
    descriptionA: data.descriptionA,
    descriptionB: data.descriptionB,
    textContact: data.textContact,
  };
  return axiosInstanceUser.post(`${URL}`, newEnterprise, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updateEnterpriseBySlug = (slug, id, data) => {
  return axios.put(`${URL}/${slug}/${id}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getEnterpriseBySlug = (slug) => {
  return axios.get(`${URL}/${slug}`, {
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

export const updateIllustrationById = (slug, id, data) => {
  return axios.put(`${URL}/update-illustration/${slug}/${id}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const isAbonneeBySlug = (slug, data) => {
  return axios.put(`${URL}/is-abonnee/${slug}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
