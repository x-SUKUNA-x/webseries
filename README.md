# Movie & Series Recommendation App

A modern, interactive React application for discovering and exploring movie and series recommendations across various genres.

## Features

- **Genre-Based Browsing**: Explore recommendations in categories like Thriller, Action, Comedy, Fiction, and Series
- **Interactive UI**: Smooth animations and hover effects powered by Framer Motion
- **Particle Background**: Dynamic particle effects using tsparticles
- **Responsive Design**: Optimized for desktop and mobile devices
- **Trailer Links**: Direct links to YouTube trailers for each recommendation
- **Grid Motion**: Animated grid layout for visual appeal

## Technologies Used

- **React**: Frontend framework
- **Framer Motion**: Animation library
- **tsparticles**: Particle background effects
- **CSS3**: Styling with modern CSS features
- **JavaScript (ES6+)**: Core programming language

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/x-SUKUNA-x/webseries.git
   cd webseries
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- **Home Page**: View the main interface with genre selection menu and animated grid
- **Genre Selection**: Click on any genre button to view recommendations for that category
- **Movie/Series Details**: Each card shows poster, details, and a link to watch the trailer
- **Navigation**: Use the back button to return to the home page

## Project Structure

```
webseries/
├── public/
│   ├── index.html
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── GridMotion.js
│   │   ├── InfiniteMenu.js
│   │   ├── ParticleBackground.js
│   │   └── TextCursor.js
│   ├── config/
│   │   └── particle-config.js
│   ├── App.js
│   ├── App.test.js
│   ├── index.js
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── styles.css
├── package.json
├── package-lock.json
└── README.md
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (irreversible)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Movie data and images sourced from various online databases
- Icons and UI inspiration from modern web design trends
- Built with Create React App
