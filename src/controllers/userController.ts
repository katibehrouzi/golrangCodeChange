import server, { SERVER_URL } from "../api/server";
import { UserDataType } from "../types/userData.types";

export const getAllUsers = () => {
  const url = `${SERVER_URL}/users`;
  return server.get(url);
};
export const getUser = (userId: string) => {
  const url = `${SERVER_URL}/users/${userId}`;
  return server.get(url);
};

export const postUser = (userInfo: UserDataType) => {
  const url = `${SERVER_URL}/users`;
  return server.post(url, userInfo);
};

export const putUser = (userDataInfo: {userInfo: UserDataType, userId: string}) => {
  const url = `${SERVER_URL}/users/${userDataInfo.userId}`;
  return server.put(url, userDataInfo);
};

export const deleteUser = (userDeleteId: number) => {
  const url = `${SERVER_URL}/users/${userDeleteId}`;
  return server.delete(url);
};