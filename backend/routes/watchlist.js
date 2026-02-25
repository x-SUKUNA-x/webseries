const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Watchlist = require('../models/Watchlist');

const SECRET_KEY = 'supersecretkey'; // Must match auth.js

// Middleware to authenticate
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

// Get User's Watchlist
router.get('/', authenticate, async (req, res) => {
    try {
        const watchlist = await Watchlist.findAll({ where: { userId: req.user.id } });
        res.json(watchlist);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add to Watchlist
router.post('/', authenticate, async (req, res) => {
    try {
        const { movieId, title, year, image } = req.body;

        // Check if already in watchlist
        const existing = await Watchlist.findOne({ where: { userId: req.user.id, movieId } });
        if (existing) {
            return res.status(400).json({ error: 'Movie is already in your watchlist' });
        }

        const newItem = await Watchlist.create({
            userId: req.user.id,
            movieId,
            title,
            year,
            image
        });

        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Remove from Watchlist
router.delete('/:movieId', authenticate, async (req, res) => {
    try {
        const { movieId } = req.params;
        const result = await Watchlist.destroy({ where: { userId: req.user.id, movieId } });

        if (result === 0) {
            return res.status(404).json({ error: 'Item not found in watchlist' });
        }
        res.json({ message: 'Removed from watchlist successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
