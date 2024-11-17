# SyncHub

SyncHub is a dew computing project designed to provide fast, local storage and compute services on edge devices. It operates offline and syncs data to AWS S3 once an internet connection is available. The project offers an API accessible by any device on the local network (WLAN) and provides a dedicated dashboard for manual file uploads and computation.

## Installation

1. **Clone the repository**:
    ```bash
    git clone git@github.com:Anurag9689/SyncFront.git
    cd Synchub/
    git checkout sync
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

## File Structure

```
.
├── eslint.config.js                   # Configuration file for ESLint rules and settings
├── index.html                         # Main entry point for the application's HTML structure
├── package.json                       # Project metadata, scripts, and dependency definitions
├── package-lock.json                  # Dependency tree lock file for consistent installations
├── postcss.config.js                  # Configuration for processing CSS using PostCSS
├── public
│   └── vite.svg                       # Default logo asset for Vite
├── README.md                          # Documentation and instructions for the project
├── src
│   ├── App.css                        # Styling for the main App component
│   ├── App.jsx                        # Root React component for the application
│   ├── assets
│   │   ├── aayush_pic.png             # Image asset for Aayush
│   │   ├── aditya_pic.jpeg            # Image asset for Aditya
│   │   ├── Alert-Close-Btn.png        # Icon for closing alert messages
│   │   ├── anshika_pic.png            # Image asset for Anshika
│   │   ├── anurag_pic.jpg             # Image asset for Anurag
│   │   ├── dr_abhishek_singh.jpeg     # Image asset for Dr. Abhishek Singh
│   │   ├── khusbu_pic.jpeg            # Image asset for Khusbu
│   │   ├── Lobster-Regular.ttf        # Font file used in the application
│   │   ├── prabhav_pic.png            # Image asset for Prabhav
│   │   ├── react.svg                  # React logo for branding or display
│   │   └── synchub_workflow.png       # Diagram of the Synchub workflow
│   ├── Component
│   │   ├── CustomAlert.jsx            # Component for displaying custom alert messages
│   │   ├── Dashboard.jsx              # Main dashboard component for user interaction
│   │   ├── FloatingForm.jsx           # Draggable and floating form component
│   │   ├── ForgotPassword.jsx         # Component for handling password recovery
│   │   ├── Header.jsx                 # Header or navigation bar component
│   │   ├── Hero.jsx                   # Hero section for the landing page
│   │   ├── Home.jsx                   # Component for the home page
│   │   ├── Login.jsx                  # Component for user login
│   │   ├── ParticleBox.jsx            # Component for rendering particle animations
│   │   ├── Register.jsx               # Component for user registration
│   │   ├── ServerConfig.jsx           # Component for managing server configurations
│   │   └── Verify.jsx                 # Component for user account verification
│   ├── index.css                      # Global CSS styles for the application
│   └── main.jsx                       # Entry point for initializing the React app
├── tailwind.config.js                 # Custom configuration for Tailwind CSS
└── vite.config.js                     # Configuration for the Vite build tool

5 directories, 36 files

```