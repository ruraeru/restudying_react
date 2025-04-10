import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../../../entities/todo/model/types";
import { addTodo, fetchTodos } from "../../../entities/todo/api/todoApi";

export const useTodosQuery = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
