import axios from "axios";

// export const CONFIG = {
//   headers: {
//     Authorization: "Bearer " + localStorage.getItem("tokenCollab"),
//   },
// };

const axiosInstanceUser = axios.create();

axiosInstanceUser.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
export { axiosInstanceUser };
