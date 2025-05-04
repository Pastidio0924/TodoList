const initialState = {
    todos: [],
    loading: true,
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_TODOS_SUCCESS':
            return {
                ...state,
                todos: action.payload,
                loading: false,
            };
        case 'ADD_TODO_SUCCESS':
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case 'DELETE_TODO_SUCCESS':
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case 'UPDATE_TODO_SUCCESS':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? action.payload : todo
                ),
            };
        default:
            return state;
    }
};

export default todoReducer;