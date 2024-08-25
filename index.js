const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); 

const userId = "ved_thigale_24091998"; // Your user_id (fullname_dob)
const email = "ved@vit.ac.in";
const rollNumber = "ABCD123";

// Root route to handle /
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the API');
});

// POST route to handle data
app.post('/', (req, res) => {
  const data = req.body.data || [];
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestLowercase = alphabets.filter(item => /^[a-z]$/.test(item)).sort().pop() || [];

  res.status(200).json({
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
  });
});

// GET route to return an operation code
app.get('/bfhl', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
