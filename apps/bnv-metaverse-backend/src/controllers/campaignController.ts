// const Student = require('../models/product.model');
import { Campaign } from '../models/campaign';
//Simple Testing
const test = function (req, res) {
  res.send('Hello from campaign!');
};
const campaignCreate = function (req, res, next) {
  Campaign.create(req.body, (err, result) => {
    //  console.log('result', result);
    if (!err) {
      res.send({
        msg: 'Data inserted successfully',
        data: result,
      });
      return;
    } else {
      return res.send({
        msg: 'Error while inserting Data',
        data: err,
      });
    }
  });
};

const findAllCampaign = function (req, res, next) {
  Campaign.find({})
    .then((response) => {
      //  console.log("response", response);
      res.json({
        data: response,
        msg: 'Getting all the Campaign data',
      });
    })
    .catch((err) => {
      res.send('error has occured', err);
    });
};

export { test, campaignCreate, findAllCampaign };
