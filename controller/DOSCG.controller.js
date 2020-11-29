const DOSCG = require('../model/DOSCG.model');

exports.findBC = () => DOSCG.findBC();
exports.getDirection = async () => {
  try {
    return await DOSCG.getDirection();
  } catch (error) {
    console.log('error');
  }
};
