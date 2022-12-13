import { io } from "socket.io-client";
import { BASE_URL } from "../configs/index";

export const socket = io(BASE_URL, {
  path: "/socket/",
});
