import React, { useEffect, useState } from 'react';
import Header from './Header.jsx';
import { CustomAlert, alertbox } from './CustomAlert.jsx';
import ParticleBox from './ParticleBox.jsx';
import { useNavigate } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Verify() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
      alertbox("Please check your email for OTP.");
  }, []);

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerify = async (e) => {
    e.preventDefault();

    const serverIP = localStorage.getItem('serverIP');
    const serverPort = localStorage.getItem('serverPort');
    const userId = localStorage.getItem('user_id'); // Retrieve user_id from localStorage

    const response = await fetch(`http://${serverIP}:${serverPort}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user_id: Number(userId), otp }) // Include user_id in the request body
    });

    console.log("response: ", response);

    if (response.ok) {
      const data = await response.json();
      sessionStorage.setItem('token', data.token); // Store the token in session storage
      navigate('/dashboard');
    } else {
      setLoading(!loading);
      alert('Verification failed. Please try again.');
    }
  };

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden flex flex-col">
        <Header />
        <ParticleBox />
        <CustomAlert />
        
        <div className="flex-grow flex justify-center items-center w-full h-full">
          <div className="w-96 h-fit z-10 p-10 text-white justify-center bg-gray-500 backdrop-fil backdrop-fil-color">
            <h1 className="text-4xl pb-7">Verify OTP</h1>
            <form className="flex flex-col gap-y-5" onSubmit={handleVerify}>
              <div className="mb-5">
                <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter OTP
                </label>
                <input 
                  type="text"
                  id="otp"
                  name="otp"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter OTP sent to your email"
                  value={otp}
                  onChange={handleOtpChange}
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
              <button 
                type="submit" onClick={() => setLoading(!loading)}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verify;
