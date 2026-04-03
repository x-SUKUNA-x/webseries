# Movie & Web Series Recommendation Platform

A full-stack, highly interactive web application that provides users with curated movie and web series recommendations. The platform features secure user authentication, dynamic UI animations, genre-based filtering, and a personalized watchlist system.

## 🚀 Key Features

* **Secure Authentication System:** End-to-end user registration and login utilizing **JSON Web Tokens (JWT)** and **bcrypt** password hashing.
* **Personalized Watchlists:** Registered users can seamlessly add and remove movies/series to their personal account-linked watchlists via a RESTful API.
* **Dynamic & Fluid UI:** The frontend leverages **Framer Motion** and **tsParticles** to deliver premium micro-animations, smooth page transitions, and an engaging visual experience.
* **Category & Genre Filtering:** Users can browse through various categories and genres, instantly retrieving relevant entertainment options.
* **Fully Responsive Design:** The interface is engineered with modern CSS best practices, ensuring a flawless experience across mobile, tablet, and desktop devices.
* **Cloud Deployed:** Automated CI/CD pipelines configured to deploy the frontend on **Vercel** and the backend API on **Render**.

## 🛠️ Technology Stack

### Frontend
* **Core:** React.js (v18), React Router DOM
* **HTTP Client:** Axios
* **Animations:** Framer Motion, GSAP, tsParticles
* **Hosting:** Vercel

### Backend
* **Core:** Node.js, Express.js
* **Database:** SQLite
* **ORM:** Sequelize
* **Security:** JWT (jsonwebtoken), bcrypt, CORS
* **Hosting:** Render

## 📁 Project Structure

The project is structured as a monorepo containing two main directories:

```text
webseries/
├── backend/            # Express.js server & SQLite database
│   ├── config/         # Database configuration (Sequelize)
│   ├── models/         # Database schemas (User, Watchlist)
│   ├── routes/         # Express API endpoints (/auth, /watchlist)
│   └── index.js        # Main server entry point
│
└── frontend/           # React.js client application
    ├── public/         # Static assets
    └── src/            # React components, styles, and logic
        ├── components/ # Reusable UI components (HeroSlider, Login, Profile)
        ├── config/     # Static data configurations (movieLists)
        ├── App.js      # Main application router
        └── index.js    # React DOM rendering entry point
```

## 💻 Running Locally

### 1. Start the Backend Server
Navigate to the backend directory, install the necessary dependencies, and start the development server:
```bash
cd backend
npm install
node index.js
```
*The backend server will run on `http://localhost:5001`.*

### 2. Start the Frontend Client
Open a new terminal window, navigate to the frontend directory, install dependencies, and start React:
```bash
cd frontend
npm install
npm start
```
*The frontend application will run on `http://localhost:3000`.*

---

*This project demonstrates a complete understanding of MERN-style architecture (swapping Mongo for a relational SQL DB), REST API design, state management, and modern cloud deployment workflows.*
