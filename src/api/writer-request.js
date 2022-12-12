import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/writer-request";

export const getWriterRequest = () => {
  return axios.get(`${URL}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const createWriterRequest = (data) => {
  const newWriterRequest = {
    idUtilisateur: data.idUtilisateur,
  };
  return axios.post(`${URL}`, newWriterRequest, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const acceptWriterRequest = (id, user) => {
  console.log("identifiant", id + " et " + user);
  return axios.put(`${URL}/${id}/${user}`, [id, user], {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const declineWriterRequest = (id) => {
  return axios.delete(`${URL}/${id}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
