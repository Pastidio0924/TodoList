import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000',
});

// Attach token to headers if present
API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const fetch_login = (data) => API.post('/auth/login', data);
export const fetch_register = (data) => API.post('/auth/register', data);
export const fetch_fetchTodos = () => API.get('/todos');
export const fetch_addTodo = (data) => API.post('/todos', data);
export const fetch_updateTodo = (id, data) => API.put(`/todos/${id}`, data);
export const fetch_deleteTodo = (id) => API.delete(`/todos/${id}`);
