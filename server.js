const express = require('express');
const sequelize = require('./config/database'); // Import database connection
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // Allows JSON request bodies

// Routes
app.use('/users', userRoutes); // Route for fetching users

// Sync database and start the server
sequelize.sync() // Ensures the database tables exist
    .then(() => {
        console.log('Database connected successfully');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to the database:', err));
