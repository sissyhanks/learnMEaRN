import express from 'express';

import morgan from 'morgan';
// const morgan = require('morgan');
import cors from 'cors';
import dotenv from 'dotenv';
// const dotenv = require('dotenv');
import { connectDB } from './config/db.js'
// const connectDB = require('./config/db');

import postRoutes from './routes/posts.js';

dotenv.config({ path: '.env'});

const app = express();

app.use('/posts', postRoutes);

app.use(express.urlencoded({
  limit: "30mb",
  extended: true
}));
app.use(express.json({
  limit: "30mb",
  extended: true
}));

//cors enables the ability to allow or restrict requested resources on a web server depend on where the HTTP request was initiated. This policy is used to secure a certain web server from access by other website or domain.
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  //if development environment use morgan logging middleware 
  app.use(morgan('dev'));
}

const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));