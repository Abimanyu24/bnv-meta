import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const marketSchema = new Schema({
  id: { type: Number, required: false, max: 100 },
  time: { type: String, required: true, max: 100 },
  status: { type: String, required: true, max: 100 },
  btnStyle: { type: Boolean, required: true },
  nftBy: { type: String, required: true, max: 100 },
  source: { type: String, required: true, max: 100 },
});

const Market = mongoose.model('market', marketSchema, 'market');

export { Market };
