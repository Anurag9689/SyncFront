import React from 'react';
import ParticleBox from './ParticleBox';

function Register() {
  return (
    <div className="relative w-full h-full align-items justify-center">
      {/* background */}
      <div id="pcontainer" className="absolute blur-[2px] z-0"></div>
      {ParticleBox()}
      {/* content */}
      <div className="grid grid-cols-2 w-full h-full">
        <div className="grid w-full justify-center items-center">
          <h1 className="text-white z-10 text-8xl lobster-regular">
            <span className="text-yellow-400">Sync</span>
            <span className="text-white">Hub</span>
          </h1>
        </div>
        <div className="grid w-full z-10 text-white justify-center items-center bg-gray-500 backdrop-fil backdrop-fil-color">
          <h1 className="text-6xl underline underline-offset-8">Register</h1>
          <form class="w-full ">
            <div class="mb-5">
              <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
              <input type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username" required />
            </div>
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
            </div>
            <div class="mb-5">
              <label for="password1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" id="password1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your password" required />
            </div>
            <div class="mb-5">
              <label for="password2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password again</label>
              <input type="password" id="password2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Re-enter your password" required />
            </div>
            <div class="mb-5">
              <label for="questions" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a question</label>
              <select name="questions" id="questions" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="question1" className="bg-gray-50 border border-gray-300 text-gray-900">Question 1</option>
                <option value="question2" className="bg-gray-50 border border-gray-300 text-gray-900">Question 2</option>
              </select>
            </div>
            <div class="mb-5">
              <label for="answer" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your answer</label>
              <input type="text" id="answer" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your answer" required />
            </div>
            <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>

          {/*
            {
              "username" : "Anurag",
              "email" : "anuragpandey9689@gmail.com",
              "password1" : "passABC@321",
              "password2" : "passABC@321",
              "question" : "What is your favorite number? (Number or Name, answer as you like)",
              "answer" : "7"
          }*/
          }
        </div>  
      </div>
        {/* title */}
        {/* form */}

    </div>
  );
}

export default Register;
