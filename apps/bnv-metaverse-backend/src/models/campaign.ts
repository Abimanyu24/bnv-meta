import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const campaignSchema = new Schema({
  id: { type: Number, required: false, max: 100 },
  time: { type: String, required: true, max: 100 },
  status: { type: String, required: true, max: 100 },
  cardContent: { type: String, required: true, max: 100 },
  nftBy: { type: String, required: true, max: 100 },
  source: { type: String, required: true, max: 100 },
});

const Campaign = mongoose.model('campaign', campaignSchema, 'campaign');

export { Campaign };
