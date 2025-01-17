import React, { useState, useEffect } from 'react';
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


function Register() {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const [questions, setQuestions] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
    question: '',
    answer: ''
  });
  const navigate = useNavigate();

  // Fetch available questions from the server
  useEffect(() => {
    const fetchQuestions = async () => {
      const serverIP = localStorage.getItem('serverIP');
      const serverPort = localStorage.getItem('serverPort');
      const response = await fetch(`http://${serverIP}:${serverPort}/get_questions`);
      const data = await response.json();
      setQuestions(data.questions);
    };
    fetchQuestions();
  }, []);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the POST request body
    const serverIP = localStorage.getItem('serverIP');
    const serverPort = localStorage.getItem('serverPort');
    if (!formData.question){
      formData.question = questions[0];
    }
    const raw = JSON.stringify({
      username: formData.username,
      email: formData.email,
      password1: formData.password1,
      password2: formData.password2,
      question: formData.question,
      answer: formData.answer
    });

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: raw,
      redirect: 'follow'
    };

    try {
      const response = await fetch(`http://${serverIP}:${serverPort}/register`, requestOptions);
      
      const result = await response.json();

      if (response.ok) {
        localStorage.setItem('user_id', result.user_id);
        // Redirect to the verify screen on successful registration
        result.otp_required===true ? navigate('/verify') : navigate('/login');
      } else {
        setLoading(!loading);
        alertbox('Registration failed: ' + result.message);
      }
    } catch (error) {
      setLoading(!loading);
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen overflow-hidden flex flex-col">
        {/* Header at the top */}
        <Header />

        {/* Particle background */}
        <ParticleBox />

        {/* Custom Alert */}
        <CustomAlert />

        {/* content */}
        <div className="flex-grow flex justify-self-center self-center justify-center items-center w-full h-full">
          <div className="w-fit h-fit z-10 p-10 text-white justify-center bg-gray-500 backdrop-fil backdrop-fil-color">
            <h1 className="text-4xl pb-7 justify-self-center">Register</h1>
            <form className="flex flex-col justify-center content-center gap-y-5" onSubmit={handleSubmit}>
              <div className="grid w-full lg:grid-cols-2 gap-x-10">
                <div className="mb-5">
                  <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                  <input 
                    type="text" 
                    id="username" 
                    name="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Enter your username" 
                    value={formData.username}
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                  <input 
                    type="password" 
                    id="password1" 
                    name="password1"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Enter your password" 
                    value={formData.password1}
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="password2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password again</label>
                  <input 
                    type="password" 
                    id="password2" 
                    name="password2"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Re-enter your password" 
                    value={formData.password2}
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="questions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a question</label>
                  <select 
                    name="question" 
                    id="questions" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={formData.question}
                    onChange={handleChange}
                    required
                  >
                    {questions.map((question, index) => 
                      (<option key={index} value={question} className="bg-gray-50 border border-gray-300 text-gray-900">{question}</option>)
                      )}
                  </select>
                </div>
                <div className="mb-5">
                  <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your answer</label>
                  <input 
                    type="text" 
                    id="answer" 
                    name="answer"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Enter your answer" 
                    value={formData.answer}
                    onChange={handleChange} 
                    required 
                  />
                </div>
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
                className="text-white justify-self-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
