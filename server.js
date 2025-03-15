const express = require('express'); 
const app = express(); 
const PORT = 3000;

// Define a route /test
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Pete Andre A. Licanda' }); // Replace "John Doe" with your full name
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
