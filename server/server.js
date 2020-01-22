const express = require('express');
const cors = require('cors');

// Requirements
require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
// Parse JSON
app.use(cors());
app.use(express.json());

// Listening to server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});