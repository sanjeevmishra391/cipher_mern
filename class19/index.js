const express = require('express');
const dotenv = require('dotenv');
const app = express();
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const { authenticateToken } = require('./middleware/auth.middleware');

dotenv.config();

app.use(express.json());


app.use('/auth', authRoutes);
app.use('/user', authenticateToken, userRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server started');
});