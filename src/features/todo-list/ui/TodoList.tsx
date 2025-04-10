import { useTodosQuery, useAddTodoMutation } from '../lib/queries';
import { useTodoStore, Filter } from '../model/todoStore';
import { Todo } from '../../../entities/todo/model/types';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Link } from 'react-router';

export function TodoList() {
    const { filter, setFilter } = useTodoStore();
    const { data: todos, isLoading, error } = useTodosQuery();
    const { mutate: addTodo } = useAddTodoMutation();
    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo('');
        }
    };

    const filteredTodos = todos?.filter((todo) => {
        if (filter === 'completed') return todo.completed;
        if (filter === 'pending') return !todo.completed;
        return true;
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div>
            <h1>Todo List</h1>
            <Link to="/">Go to Home</Link>
            <form onSubmit={handleSubmit}>
                <input
                    value={newTodo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button type="submit">Add</button>
            </form>
            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('pending')}>Pending</button>
            </div>
            <ul>
                {filteredTodos?.map((todo) => (
                    <li key={todo.id}>
                        {todo.title} - {todo.completed ? 'Done' : 'Pending'}
                    </li>
                ))}
            </ul>
        </div>
    );
}