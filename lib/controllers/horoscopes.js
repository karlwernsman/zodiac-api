const { Router } = require('express');
const { horoscopes } = require('../zodiacs-data.js');

module.exports = Router().get('/:sign', (req, res) => {
  let equal;
  for (const horoscope of horoscopes) {
    if (horoscope.sign === req.params.sign) {
      equal = horoscope;
    }
  }
  res.json(equal);
});
