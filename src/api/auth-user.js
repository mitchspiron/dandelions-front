import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/auth-user";

export const signup = (data) => {
  const newUser = {
    nom: data.nom,
    prenom: data.prenom,
    email: data.email,
    telephone: data.telephone,
    aPropos: data.aPropos,
    motDePasse: data.motDePasse,
  };
  return axios.post(`${URL}` + "/signup", newUser);
};

export const signin = (data) => {
  return axios.post(`${URL}` + "/signin", data, {
    withCredentials: true,
  });
};

export const isLoggedIn = () => {
  return axios.get(`${URL}` + "/verify", {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const forgotPassword = (data) => {
  return axios.post(`${URL}` + "/forgot-password", data);
};

export const resetPassword = (data, token) => {
  return axios.post(`${URL}` + `/reset-password/${token}`, data);
};
