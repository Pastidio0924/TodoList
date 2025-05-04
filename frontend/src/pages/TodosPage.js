import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, addTodo, deleteTodo, updateTodo } from '../redux/actions/todoActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { logout } from '../redux/actions/authActions';
import './TodosPage.css';

const TodosPage = () => {
    const [newTodo, setNewTodo] = useState('');

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            dispatch(addTodo({ title: newTodo }))
                .then(() => {
                    setNewTodo('');
                    dispatch(fetchTodos()); // Fetch updated todos after adding
                });
        }
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleCompleteTodo = (todo) => {
        console.log(todo)
        dispatch(updateTodo(todo.id, { title: todo.title, completed: 1 }))
            .then(() => {
                dispatch(fetchTodos()); // Fetch updated todos after completing
            });
    };

    const handleLogout = () => {
        console.log('User logged out');
        dispatch(logout());
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Your Todos</h1>
            <form onSubmit={handleAddTodo} className="mb-4">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Add a new todo"
                        required
                    />
                    <button type="submit" className="btn btn-primary">Add Todo</button>
                </div>
            </form>

            <ul className="list-group mb-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center todo-item">
                        <span className={todo.completed === 1 ? "todo-completed" : ""}>
                            {todo.title}
                        </span>
                        <div>
                            {todo.completed === 0 && (
                                <button className="btn btn-warning me-2" onClick={() => handleCompleteTodo(todo)}>Complete</button>
                            )}
                            <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="text-center">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default TodosPage;
