import { Todo } from "../model/types";

export const fetchTodos = async (): Promise<Todo[]> => {
  const res = await fetch("api/todos");
  if (!res.ok) throw new Error("failed to fetch todos");
  return res.json();
};

export const addTodo = async (title: string): Promise<Todo> => {
  const res = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
  if (!res.ok) throw new Error("Failed to add todo");
  return res.json();
};
