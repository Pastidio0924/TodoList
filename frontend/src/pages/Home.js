import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <div>
            <h1>Welcome to the To-Do App</h1>
            {!isAuthenticated ? (
                <div>
                    <Link to="/login">Login</Link>
                    <br />
                    <Link to="/register">Register</Link>
                </div>
            ) : (
                <div>
                    <Link to="/todos">Go to Todos</Link>
                </div>
            )}
        </div>
    );
};

export default Home;