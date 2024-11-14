import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header.jsx';
import ParticleBox from './ParticleBox.jsx';
import { CustomAlert, alertbox } from './CustomAlert.jsx';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Login() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const serverIP = localStorage.getItem('serverIP');
    const serverPort = localStorage.getItem('serverPort');
    
    // Define the API endpoint using stored server IP and port
    const apiUrl = `http://${serverIP}:${serverPort}/login`;
    
    // Define the request body
    const body = JSON.stringify({
      username_email: email,
      password: password,
    });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
      });

      const data = await response.json();
      if (response.ok) {
        // Store the token in session storage
        sessionStorage.setItem('token', data.token);
        
        // Redirect to the dashboard
        navigate('/dashboard');
      } else {
        setLoading(!loading);
        alertbox('Login failed : ' + data.message);
      }
    } catch (error) {
      setLoading(!loading);
      alertbox('Error : ' + 'website error, please contact the developer.')
      console.error('Error : ', error);
    }
  };

  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col">
      <Header />
      <ParticleBox />
      <CustomAlert />

      <div className="flex-grow flex justify-self-center self-center justify-center items-center w-full h-full">
        <div className="w-96 h-fit z-10 p-10 text-white bg-gray-500 backdrop-filter backdrop-fil backdrop-fil-color rounded-lg">
          <h1 className="text-4xl pb-7 text-center">Login</h1>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
              />
            </div>
            <ClipLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            <button type="submit" onClick={() => setLoading(!loading)} className="my-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
              Login
            </button>
          </form>
          <div className="text-center mt-3">
            <a href="/forgot-password" className="text-blue-300 hover:text-blue-500">Forgot Password?</a>
            <br />
            <a href="/register" className="text-blue-300 hover:text-blue-500">Create an Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
