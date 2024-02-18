import server, { SERVER_URL } from "../api/server";
import { HttpResponseI } from "../types/apiResponse.types";
import { UserDataType } from "../types/userData.types";

export const getAllUsers = () => {
  const url = `${SERVER_URL}/users`;
  return server.get(url);
};