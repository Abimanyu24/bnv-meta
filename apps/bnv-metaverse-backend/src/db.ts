import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CryptoJS from 'crypto-js';

dotenv.config();

const decryptUserName  = CryptoJS.AES.decrypt(`${process.env.username}`, `${process.env.key}`);
const decryptPassword  = CryptoJS.AES.decrypt(`${process.env.username}`, `${process.env.key}`);

const originalUserName = decryptUserName.toString(CryptoJS.enc.Utf8);
const originalPassword = decryptPassword.toString(CryptoJS.enc.Utf8);

const mongoDBUrl = `mongodb+srv://${originalUserName}:${originalPassword}${process.env.mongoDBAtlasUrl}${process.env.dbName}?retryWrites=true&w=majority`;
const connectDB = async () => {
  await mongoose.connect(mongoDBUrl);
  console.log('MongoDb Connected');
};
export default connectDB;
