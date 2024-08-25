const express = require('express');
const cors = require('cors');
const app = express();

// Use cors middleware
app.use(cors());

app.use(express.json());

// Handle GET requests to /bfhl
app.get('/bfhl', (req, res) => {
    res.json({ message: 'GET request to /bfhl received' });
});

// Handle POST requests to /bfhl
app.post('/bfhl', (req, res) => {
    const { operation_code } = req.body;
    // Handle the operation code
    res.json({ status: 'success', operation_code });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
