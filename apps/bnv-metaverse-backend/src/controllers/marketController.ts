// const Student = require('../models/product.model');
import { Market } from '../models/market';
//Simple Testing
const testMarket = function (req, res) {
  res.send('Hello from Market!');
};
const marketCreate = function (req, res, next) {
  Market.create(req.body, (err, result) => {
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

const findAllMarket = function (req, res, next) {
  Market.find({})
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

export { testMarket, marketCreate, findAllMarket };
