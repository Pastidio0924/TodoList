import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    todos: todoReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;