const { Router } = require('express');
const { horoscopes } = require('../zodiacs-data.js');

module.exports = Router().get('/:sign', (req, res) => {
  const horoscopeInfo = [];
  for (const horoscope of horoscopes) {
    if (horoscope.sign === req.params.sign) {
      horoscopeInfo.push({ horoscope: horoscope.horoscope });
    }
  }
  res.json(horoscopeInfo);
});
