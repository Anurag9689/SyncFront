import React, { useState } from 'react';
import Header from './Header.jsx';
import { CustomAlert, alertbox } from './CustomAlert.jsx';
import ParticleBox from './ParticleBox.jsx';

function ServerConfig() {
  const [ipAddress, setIpAddress] = useState('');
  const [port, setPort] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation for IP address and port
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const portPattern = /^[0-9]{1,5}$/;

    if (!ipPattern.test(ipAddress)) {
      setError("Please enter a valid IP address");
      alertbox("Please enter a valid IP address");
      return;
    }
    
    if (!portPattern.test(port) || port < 1024 || port > 65535) {
      setError("Please enter a valid port number (1024-65535)");
      alertbox("Please enter a valid port number (1024-65535)");
      return;
    }

    // Save the IP address and port to localStorage
    localStorage.setItem('serverIP', ipAddress);
    localStorage.setItem('serverPort', port);

    // Provide feedback to the user
    setError('');
    alertbox('Server configuration saved!');
  };

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden flex flex-col">
        {/* Header at the top */}
        <Header />

        {/* Particle background */}
        <ParticleBox />

        {/* Alert box */}
        <CustomAlert />

        {/* content */}
        <div className="flex-grow flex justify-self-center self-center justify-center items-center w-full h-full">
          <div className="w-fit h-fit z-10 p-10 text-white justify-center bg-gray-500 backdrop-fil backdrop-fil-color">
            <h1 className="text-4xl pb-7 justify-self-center">Server Configuration</h1>
            <form className='flex flex-col justify-center content-center gap-y-5' onSubmit={handleSubmit}>
              <div className='grid w-full lg:grid-cols-2 gap-x-10'>
                <div className="mb-5">
                  <label for="ipAddress" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Backend Server IP</label>
                  <input
                    type="text"
                    id="ipAddress"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter backend server IP"
                    value={ipAddress}
                    onChange={(e) => setIpAddress(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-5">
                  <label for="port" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Server Port</label>
                  <input
                    type="text"
                    id="port"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter backend server port"
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                    required
                  />
                </div>
              </div>
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              <button type="submit" className="text-white justify-self-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Save Configuration
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServerConfig;
