const axios = require('axios');

// exports.findXYZ = () => {
//   const arr = [null, null, 5, 9, 15, 23, null];

//   arr.forEach((x, i) => {
//     if (i === 0) {
//       console.log(`x = ${2 ** 0}`);
//     } else if (i === 1) {
//       console.log(`y = ${2 ** (i - 1) + 2 ** i}`);
//     } else if (i === 6) {
//       console.log(`z = ${arr[i - 1] + 2 ** i - 1}`);
//     }
//   });
// };

const findBC = () => {
  const A = 21;
  const B = 23 - A;
  const C = -21 - A;

  return {
    A,
    B,
    C,
  };
};

const getDirection = async () => {
  try {
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=13.8058821418143, 100.53753508431285&destination=13.746817968135716, 100.53934583046292&key=${process.env.API_KEY}`;
    return await axios.get(url);
  } catch (error) {
    console.log('error');
  }
};

module.exports = { findBC, getDirection };
