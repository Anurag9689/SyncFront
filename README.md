# SyncHub

SyncHub is a dew computing project designed to provide fast, local storage and compute services on edge devices. It operates offline and syncs data to AWS S3 once an internet connection is available. The project offers an API accessible by any device on the local network (WLAN) and provides a dedicated dashboard for manual file uploads and computation.

## Installation

1. **Clone the repository**:
    ```bash
    git clone git@github.com:Anshika09Singh/Synchub.git
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
├── eslint.config.js          # ESLint configuration for linting
├── index.html                # Entry HTML file
├── package.json              # Project dependencies
├── postcss.config.js         # PostCSS configuration for Tailwind
├── public
│   └── vite.svg              # Public assets
├── README.md                 # Project documentation
├── src                       # Source files
│   ├── App.css               # Main CSS file
│   ├── App.jsx               # Main React component
│   ├── assets                # Static assets
│   │   ├── Alert-Close-Btn.png
│   │   ├── dr_abhishek_singh.jpeg
│   │   ├── react.svg
│   │   └── synchub_workflow.png
│   ├── Component             # UI Components
│   │   ├── CustomAlert.jsx       # Alert component
│   │   ├── Dashboard.jsx         # Dashboard for file management
│   │   ├── FloatingForm.jsx      # Form for CRUD operations
│   │   ├── ForgotPassword.jsx    # Password reset component
│   │   ├── Header.jsx            # Header component
│   │   ├── Hero.jsx              # Landing page hero section
│   │   ├── Home.jsx              # Home page
│   │   ├── Login.jsx             # Login page
│   │   ├── ParticleBox.jsx       # Particle effect component
│   │   ├── Register.jsx          # Registration page
│   │   ├── ServerConfig.jsx      # Server configuration settings
│   │   └── Verify.jsx            # Email verification component
│   ├── index.css              # Global styles
│   └── main.jsx               # Entry point for React
├── tailwind.config.js         # Tailwind CSS configuration
└── vite.config.js             # Vite configuration for dev server
```