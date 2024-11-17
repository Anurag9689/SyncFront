import React from 'react';
import DrAbhishekSingh from "../assets/dr_abhishek_singh.jpeg";
import SynchubWorkflow from "../assets/synchub_workflow.png";

import AnuragPandey from "../assets/anurag_pic.jpg"
import AayushSinha from "../assets/aayush_pic.png"
import AnshikaSingh from "../assets/anshika_pic.png"
import AdityaChaube from "../assets/aditya_pic.jpeg"
import Prabhav from "../assets/prabhav_pic.png"
import KhusbuRai from "../assets/khusbu_pic.jpeg"


function Hero() {
  return (
    <div className="w-full h-full bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-16 md:py-24 lg:py-32 animate-fade-in bg-gradient-to-br from-gray-800 via-gray-900 to-black">
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
      <section id="learn-more" className="py-16 md:py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="container mx-auto px-4 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Why Dew Computing?</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto md:mx-0">
            Dew computing focuses on offline-first storage and computation, ensuring speed and efficiency by processing tasks locally, right near the source. With SyncHub, you get the best of both worlds: local control and cloud resilience.
          </p>
          <div className="mt-8 flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center md:items-start">
            <div className="bg-gradient-to-tl from-gray-700 to-gray-600 rounded-lg p-6 shadow-lg max-w-sm w-full">
              <h3 className="text-xl font-semibold text-white">Offline Storage</h3>
              <p className="mt-2 text-gray-300">SyncHub stores your data locally and syncs to AWS S3 when connected, ensuring constant access to critical files.</p>
            </div>
            <div className="bg-gradient-to-tl from-gray-700 to-gray-600 rounded-lg p-6 shadow-lg max-w-sm w-full">
              <h3 className="text-xl font-semibold text-white">Edge Device Support</h3>
              <p className="mt-2 text-gray-300">Designed to support edge devices, making data faster to access and allowing real-time processing at the source.</p>
            </div>
            <div className="bg-gradient-to-tl from-gray-700 to-gray-600 rounded-lg p-6 shadow-lg max-w-sm w-full">
              <h3 className="text-xl font-semibold text-white">Seamless Sync</h3>
              <p className="mt-2 text-gray-300">Automatically synchronizes all changes with the cloud, so data is always updated and secure on AWS S3.</p>
            </div>
          </div>
        </div>
      </section>


      {/* People Involved and Submitted To Section */}
      <div className="w-full px-4 py-8 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="bg-gradient-to-b from-gray-700 to-gray-600 p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-bold text-white mb-4">People Involved</h3>
          <p className="text-gray-300 mb-4">Submitted by:</p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-y-6">
            <li className="flex items-center space-x-4">
              <img src={AnuragPandey} alt="Anurag's Photo" className="w-12 h-12 rounded-full bg-gray-400 object-cover" />
              <span className="text-white font-semibold">Anurag</span>
            </li>
            <li className="flex items-center space-x-4">
              <img src={AayushSinha} alt="Aayush's Photo" className="w-12 h-12 rounded-full bg-gray-400 object-cover" />
              <span className="text-white font-semibold">Aayush</span>
            </li>
            <li className="flex items-center space-x-4">
              <img src={AnshikaSingh} alt="Anshika's Photo" className="w-12 h-12 rounded-full bg-gray-400 object-cover" />
              <span className="text-white font-semibold">Anshika</span>
            </li>
            <li className="flex items-center space-x-4">
              <img src={Prabhav} alt="Prabhav's Photo" className="w-12 h-12 rounded-full bg-gray-400 object-cover" />
              <span className="text-white font-semibold">Prabhav</span>
            </li>
            <li className="flex items-center space-x-4">
              <img src={AdityaChaube} alt="Aditya's Photo" className="w-12 h-12 rounded-full bg-gray-400 object-cover" />
              <span className="text-white font-semibold">Aditya</span>
            </li>
            <li className="flex items-center space-x-4">
              <img src={KhusbuRai} alt="Khushbu's Photo" className="w-12 h-12 rounded-full bg-gray-400 object-cover" />
              <span className="text-white font-semibold">Khushbu</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-b from-gray-700 to-gray-600 p-6 rounded-lg shadow-lg">
          <h5 className="text-xl font-bold text-white mb-4">Submitted To:</h5>
          <div className="flex items-center space-x-4">
            <img src={DrAbhishekSingh} alt="Abhishek sir's photo" className="w-16 h-16 rounded-full bg-gray-400 object-cover" />
            <div>
              <p className="font-semibold text-white">Abhishek Singh</p>
              <p className="text-sm text-gray-300">Assistant Professor at GGSIPU EDC (USAR)</p>
              <a
                href="https://www.linkedin.com/in/dr-abhishek-singh-632739b7/"
                className="text-blue-400 hover:text-blue-500 text-sm mt-2 inline-block"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default Hero;