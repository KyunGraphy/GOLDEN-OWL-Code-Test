import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

import productRoute from './routes/product.route.js';

const app = express();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB.');
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log('mongodb disconnected');
});

app.use(cookieParser());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1/product', productRoute)

app.listen(8800, () => {
  connect();
  console.log(`Connecting to server port ${8800}`);
});