import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/event-registration";

export const createEventRegistration = (data) => {
  const newEventRegister = {
    idEvenement: data.idEvenement,
    idUtilisateur: data.idUtilisateur,
  };
  return axios.post(`${URL}`, newEventRegister, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};

export const getEventRegistrationByEvent = (slug) => {
  return axios.get(`${URL}/${slug}`, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
