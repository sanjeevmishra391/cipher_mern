const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blog.routes');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Database connected");
}).catch(() => {
  console.log("Error connecting database");
});

app.use(express.json());
app.use('/blog', blogRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running");
});