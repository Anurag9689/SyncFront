import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import ForgotPassword from './Component/ForgotPassword.jsx';
import EnterEmail from './Component/EnterEmail.jsx';
import ResetPassword from './Component/ResetPassword.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/enter-email" element={<EnterEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
