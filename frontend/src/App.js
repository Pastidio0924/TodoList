import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TodosPage from './pages/TodosPage';
import PrivateRoute from './components/PrivateRoute';

// Redirect Component for Catch-All Route
const RedirectToLogin = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate('/login');
  }, [navigate]);
  return null; // Render nothing while redirecting
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/todos"
            element={
              <PrivateRoute>
                <TodosPage />
              </PrivateRoute>
            }
          />
          {/* Catch-All Route */}
          <Route path="*" element={<RedirectToLogin />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;