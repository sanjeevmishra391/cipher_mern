const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const { authenticateToken } = require('./middleware/auth.middleware');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/user', authenticateToken, userRoutes);

app.listen(3002, () => {
  console.log('Server started');
});