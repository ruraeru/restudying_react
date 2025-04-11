import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query"
import { createUser, getUsers, IUser } from "./api/getUsers"
import styled from "@emotion/styled";
import { StyledButton } from "../../features/counter/ui/CounterButton.styles";
import { useUserStore } from "./api/store/useUserStore";
import { FormEvent, useEffect } from "react";

const UserList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`


export default function ApiTest() {
    const queryClient = useQueryClient();
    const { filters, setFilters } = useUserStore();
    const { data: users, isLoading } = useQuery<IUser[]>({
        queryKey: ['users', filters],
        queryFn: () => getUsers(filters)
    });

    const createUserMutation = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        }
    });

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit")
        const formData = new FormData(e.currentTarget);

        const filter = formData.get("filter")?.toString();
        if (filter) {
            setFilters(filter);
        }
    }

    useEffect(() => {
        console.log(filters);
    }, [filters]);

    const onClick = () => {
        createUserMutation.mutate();
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input placeholder="filters" name="filter" />
            </form>
            <StyledButton onClick={onClick}>Create User</StyledButton>
            <UserList>
                {users?.map((user) => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                        <p>{user.created_at}</p>
                        <p>{user.updated_at}</p>
                    </div>
                ))}
            </UserList>
        </div>
    )
}