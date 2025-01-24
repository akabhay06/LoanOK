import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection URI from environment variables
const MONGO_URI = process.env.MONGO;

// Connect to MongoDB without deprecated options
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Basic route
app.get('/', (req, res) => res.send('Hello from the Express server!'));

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
