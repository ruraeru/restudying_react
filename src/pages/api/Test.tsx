import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getTodos, IGetTodosResult } from "../../shared/utils/getTodos"
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";

const TodoWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100vh;
    padding: 5px;
`;

export default function Test() {
    const [dummy, setDummy] = useState<IGetTodosResult[]>();
    const { data, isLoading } = useQuery<IGetTodosResult[]>({ queryKey: ['todos'], queryFn: getTodos });

    const postData = async ({ id, title }: { id: number, title: string }) => {
        if (dummy) {
            const target = dummy[id - 1];
            const targetPrev = dummy.slice(0, target.id - 1);
            const targetNext = dummy.slice(target.id, dummy.length);

            const newData: IGetTodosResult = {
                completed: true,
                id,
                title,
                userId: 1,
            }

            setDummy(() => {
                return [
                    ...targetPrev,
                    newData,
                    ...targetNext
                ]
            });
        }

    }

    useEffect(() => {
        console.log("dummy:", dummy);
        if (!dummy) {
            setDummy(data);
        }
    }, [data, dummy]);

    const mutation = useMutation({
        mutationFn: postData,
        onSettled: () => {
            console.log("second")
        },
        onSuccess: () => {
            console.log("first")
        },
    })
    return (
        <TodoWrapper>
            {!isLoading ? dummy?.map((todo => (
                <div key={todo.id}>
                    <p>{todo.id} : {todo.title}</p>
                    <button onClick={() => mutation.mutate({ id: todo.id, title: todo.title + todo.id })}>
                        {/* {mutation.isPending && "처리 중"} */}
                        {mutation.status}
                    </button>
                </div>
            ))) : (
                <div>Loading...</div>
            )}
        </TodoWrapper>
    )
}