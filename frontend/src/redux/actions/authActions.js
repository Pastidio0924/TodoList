import { fetch_login, fetch_register } from '../../api';

export const login = (credentials) => async (dispatch) => {
    try {
        const res = await fetch_login(credentials);
        dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
    } catch (error) {
        dispatch({type: 'Error', payload: error.response.data.message})
        console.error(error);
    }
};

export const register = (credentials) => async (dispatch) => {
    console.log("asdfds", credentials);
    try {
        await fetch_register(credentials);
        //dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
        return true;
    } catch (error) {
        dispatch({type: 'Error', payload: error.response.data.message})
        return false;
    }
};

export const logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
};

export const clearError = () => (dispatch) => {
    dispatch({ type: 'Clear' });
};