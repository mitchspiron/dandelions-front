import jwt from "jsonwebtoken";

export const decodeToken = (token) => {
  return jwt.verify(token, "at-secret");
};
