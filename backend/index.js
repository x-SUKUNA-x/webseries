const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const watchlistRoutes = require('./routes/watchlist');
const Watchlist = require('./models/Watchlist'); // Import model to ensure it gets synced
const User = require('./models/User'); // Ensure order before Watchlist

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/watchlist', watchlistRoutes);

sequelize.sync({ alter: true }).then(() => {
    console.log('Database connected and synced');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error('Database connection error:', err));
