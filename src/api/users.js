import axios from "axios";
import { BASE_URL } from "../configs";
import { axiosInstanceUser } from "./config";

const URL = BASE_URL + "/users";

export const getUsers = () => {
  return axios.get(`${URL}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const createUsers = (data) => {
  const newUser = {
    nom: data.nom,
    prenom: data.prenom,
    email: data.email,
    telephone: data.telephone,
    role: data.role,
    aPropos: data.aPropos,
    motDePasse: data.motDePasse,
  };
  return axiosInstanceUser.post(`${URL}`, newUser, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updateUsersInfoById = (id, data) => {
  return axios.put(`${URL}/info/${id}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const updateUsersPasswordById = (id, data) => {
  return axios.put(`${URL}/password/${id}`, data, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getUsersById = (id) => {
  return axios.get(`${URL}/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
