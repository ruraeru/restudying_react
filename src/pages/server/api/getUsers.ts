import axios from "axios";

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  phone: string;
  avatar: string;
  created_at: string;
  updated_at: string;
}

export const getUsers = async (filters?: string) => {
  const res = await axios.get("http://localhost:3001/api/users");
  // console.log("getusers api called", filters);
  return res.data.data;
};

export const createUser = async () => {
  const randomString = Math.random().toString(36).substring(2, 11);
  const res = await axios.post("http://localhost:3001/api/users", {
    username: `user_${randomString}`,
    email: `${randomString}@gmail.com`,
    password: "default",
  });
};

export const deleteUser = async (id: number) => {
  const res = await axios.delete(`http://localhost:3001/api/users/${id}`);
};
