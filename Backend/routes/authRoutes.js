const express = require('express');
const passport = require('passport');
const User = require('../models/userModel');

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) { 
            return res.status(400).json({ message: 'Username and password are required.' });
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists.' });
        }

        const newUser = new User({ username });
        await newUser.setPassword(password); 
        await newUser.save();

        res.status(201).json({ message: 'Registration successful.', user: req.user.username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json({ message: 'Login successful.', user: req.user.username });
});

module.exports = router;
