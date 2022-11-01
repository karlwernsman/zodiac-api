const { Router } = require('express');
const { zodiacs } = require('../zodiacs-data.js');

module.exports = Router().get('/', (req, res) => {
  const filteredZodiacInfo = [];
  for (const zodiac of zodiacs) {
    filteredZodiacInfo.push({ id: zodiac.id, name: zodiac.name });
  }
  res.json(filteredZodiacInfo);
});
