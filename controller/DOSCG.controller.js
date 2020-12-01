const DOSCG = require('../model/DOSCG.model');
const axios = require('axios');

exports.findBC = () => DOSCG.findBC();
exports.getDirection = async () => {
  try {
    return await DOSCG.getDirection();
  } catch (error) {
    console.log('error');
  }
};

exports.reply = async (req, res) => {
  const { body } = req;
  const { events } = body;

  const token = events[0].replyToken;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  };

  let replyText = 'สวัสดีครับ จะรีบมาตอบให้เร็วที่สุดนะครับ';

  const data = {
    replyToken: token,
    messages: [
      {
        type: 'text',
        text: replyText,
      },
    ],
  };

  const replyRes = await axios.post(
    'https://api.line.me/v2/bot/message/reply',
    data,
    {
      headers: headers,
    }
  );

  res.sendStatus(200);
};
