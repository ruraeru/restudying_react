import axios from "axios";

export interface IUser {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export const getUsers = async (filters: string) => {
  const res = await axios.get("http://localhost:3001/api/users");
  // console.log("getusers api called", filters);
  return res.data.data;
};

export const createUser = async () => {
  const res = await axios.post("http://localhost:3001/users", {
    name: Math.random().toString(36).substring(2, 11),
    email: `${Math.random().toString(36).substring(2, 11)}@gmail.com`,
  });
};
