# Chat App

A real-time chat application built using a MERN stack with Vite as the frontend build tool and Tailwind CSS for styling.

## Features

- **Real-time Messaging**: Provides instant messaging with a smooth, real-time chat experience using socketio.
- **User Authentication**: Secure login and signup with JWT authentication.
- **Responsive Design**: Optimized for both mobile and desktop views using Tailwind CSS.

## Technologies

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Frontend**: React, Javascript, Tailwind CSS
- **Build Tool (Frontend)**: Vite

## Folder Structure

- **chatly/**
  - **client/** — Contains frontend code
    - `src/` — React components, pages, and utilities
    - `public/` — Static assets and `index.html`
  - **server/** — Contains backend code
    - `controllers/` — Request handlers
    - `models/` — MongoDB models
    - `routes/` — API routes
    - `config/` — Configuration files (e.g., database connection)
    - `middlewares/` — Configuration files (e.g., database connection)
    - `utils/` — Helper functions

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (vX.X.X)
- [MongoDB](https://www.mongodb.com/)
- [Vite](https://vitejs.dev/) (for frontend build)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Backend Setup**

   - Navigate to the chatly directory `the project's root directory` and run

     ```bash
     npm install
     ```

   - Create a .env file in the chatly folder and configure environment variables

     ```bash
     MONGO_URI=your_mongodb_uri
     PORT=your_port
     JWT_SECRET=your_jwt_secret
     ```

   - Start the backend server

     ```bash
         npm run dev
     ```

3. **Frontend Setup**

   - Open a new terminal, navigate to the client directory

     ```bash
     cd client
     ```

   - Install client dependencies

     ```bash
     npm install
     ```

   - Start the frontend development server

     ```bash
         npm run dev
     ```

## Runnung the Application

- Access the app by opening http://localhost:5173 in your browser
