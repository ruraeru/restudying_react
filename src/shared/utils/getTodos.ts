import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

export interface IGetTodosResult {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export const getTodos = async (): Promise<IGetTodosResult[]> => {
  const res = await axios.get(BASE_URL);
  return res.data.slice(0, 10);
};
