const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Static folder
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Backend Running Successfully');
});

// Port
const PORT = process.env.PORT || 5000;

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB Connected Successfully');

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch((err) => {
  console.error('MongoDB Connection Error:', err.message);
  process.exit(1);
});