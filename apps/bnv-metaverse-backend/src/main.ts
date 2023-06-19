/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser, { json } from 'body-parser';
import connectDB from './db';

import {
  campaignCreate,
  findAllCampaign,
} from './controllers/campaignController';
import { marketCreate, findAllMarket } from './controllers/marketController';

const app = express();

// const mongoose = require('mongoose')
connectDB();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to bnv-metaverse-express!' });
});

// app.get('/campaignControllertest', test);

app.post('/campaignCreate', campaignCreate);
app.post('/marketCreate', marketCreate);

app.get('/getCampaign', findAllCampaign);
app.get('/getMarket', findAllMarket);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
process.on('unhandledRejection', (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
});
