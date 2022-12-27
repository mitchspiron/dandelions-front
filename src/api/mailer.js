import axios from "axios";
import { BASE_URL } from "../configs";

const URL = BASE_URL + "/mailer";

export const sendMailContact = (data) => {
  const sendContact = {
    from: data.from,
    telephone: data.telephone,
    fullname: data.fullname,
    message: data.message,
  };
  return axios.post(`${URL}/contact`, sendContact, {
    withCredentials: true,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("dandelions_token"),
    },
  });
};
