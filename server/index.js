import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const dotenv = require('dotenv');

const app = express();

app.use(express.urlencoded({
  limit: "30mb",
  extended: true
}));
app.use(express.json({
  limit: "30mb",
  extended: true
}));
app.use(cors());

const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT;