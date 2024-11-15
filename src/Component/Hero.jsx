import React from 'react';
import DrAbhishekSingh from "../assets/dr_abhishek_singh.jpeg";
import SynchubWorkflow from "../assets/synchub_workflow.png";


function Hero() {
  return (
    <div className="w-full h-full bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="max-w-xl text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">SyncHub</h1>
            <p className="text-lg md:text-xl text-blue-200">
              A <strong>dew computing</strong> based solution enabling local storage and computation for edge devices, making data accessible and processes fast, even offline.
            </p>
            <p className="text-sm md:text-md text-blue-100 leading-relaxed">
              SyncHub syncs local storage and updates with <span className="font-semibold">AWS S3</span> once online, maintaining data reliability and accessibility. With APIs available for WLAN devices, users can upload files or trigger manual computations from anywhere.
            </p>
            <a href="#learn-more" className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded-md mt-4 inline-block">
              Learn More
            </a>
          </div>

          <div className="mt-8 lg:mt-0 lg:max-w-lg">
            <img src={SynchubWorkflow} alt="SyncHub illustration" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Why Dew Computing Section */}
      <section id="learn-more" className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">Why Dew Computing?</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto md:mx-0">
            Dew computing focuses on offline-first storage and computation, ensuring speed and efficiency by processing tasks locally, right near the source. With SyncHub, you get the best of both worlds: local control and cloud resilience.
          </p>
          <div className="mt-8 flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center md:items-start">
            <div className="bg-white rounded-lg p-6 shadow-md max-w-sm w-full">
              <h3 className="text-xl font-semibold text-blue-900">Offline Storage</h3>
              <p className="mt-2 text-gray-600">SyncHub stores your data locally and syncs to AWS S3 when connected, ensuring constant access to critical files.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md max-w-sm w-full">
              <h3 className="text-xl font-semibold text-blue-900">Edge Device Support</h3>
              <p className="mt-2 text-gray-600">Designed to support edge devices, making data faster to access and allowing real-time processing at the source.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md max-w-sm w-full">
              <h3 className="text-xl font-semibold text-blue-900">Seamless Sync</h3>
              <p className="mt-2 text-gray-600">Automatically synchronizes all changes with the cloud, so data is always updated and secure on AWS S3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* People Involved and Submitted To Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4">People Involved</h3>
          <p className="text-gray-700 mb-4">Submitted by:</p>
          <ul className="grid grid-cols-3 space-y-4">
            <li className="flex items-center space-x-4">
              <img src="" alt="Anurag's Photo" className="w-10 h-10 rounded-full bg-gray-200 object-cover" />
              <span className="text-gray-800 font-semibold">Anurag</span>
            </li>
            <li className="flex items-center space-x-4">
              <img src="" alt="Anshika's Photo" className="w-10 h-10 rounded-full bg-gray-200 object-cover" />
              <span className="text-gray-800 font-semibold">Anshika</span>
            </li>
            <li className="flex items-center space-x-4">
              <img src="" alt="Aayush's Photo" className="w-10 h-10 rounded-full bg-gray-200 object-cover" />
              <span className="text-gray-800 font-semibold">Aayush</span>
            </li>
            <li className="flex items-center space-x-4">
              <img src="" alt="Prabhav's Photo" className="w-10 h-10 rounded-full bg-gray-200 object-cover" />
              <span className="text-gray-800 font-semibold">Prabhav</span>
            </li>
            <li className="flex items-center space-x-4">
              <img src="" alt="Aditya's Photo" className="w-10 h-10 rounded-full bg-gray-200 object-cover" />
              <span className="text-gray-800 font-semibold">Aditya</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h5 className="text-xl font-bold text-blue-900 mb-4">Submitted To:</h5>
          <div className="flex items-center space-x-4">
            <img src={DrAbhishekSingh} alt="Abhishek sir's photo" className="w-16 h-16 rounded-full bg-gray-200" />
            <div>
              <p className="font-semibold text-gray-900">Abhishek Singh</p>
              <p className="text-sm text-gray-600">Assistant Professor at GGSIPU EDC (USAR) </p>
              <a href="https://www.linkedin.com/in/dr-abhishek-singh-632739b7/" className="text-blue-500 hover:text-blue-700 text-sm mt-2 inline-block">Linkedin Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;