
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/users', userRoutes);

app.listen(5000, '0.0.0.0', () => console.log('Backend running on port 5000'));
