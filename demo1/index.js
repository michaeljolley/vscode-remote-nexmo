const Nexmo = require("nexmo");

require("dotenv").config();

const nexmo = new Nexmo({
  apiKey: process.env.NEXMO_API_KEY,
  apiSecret: process.env.NEXMO_API_SECRET
});

const from = "12053501515";
const message =
  'Thanks for hanging out today! You can find my slides, demos and more at http://bit.ly/devopsdays2019';

exports.devopsdays = (req, res) => {
  const params = Object.assign(req.query, req.body);
  const to = params.msisdn;

  nexmo.message.sendSms(from, to, message);

  res.status(200).send(message);
};