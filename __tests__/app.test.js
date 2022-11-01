const request = require('supertest');
const app = require('../lib/app');

// describe('example test - you should probably update me', () => {
//   it('home route should return hello world', async () => {
//     const resp = await request(app).get('/');
//     expect(resp.text).toEqual('hello world!');
//   });
// });

const { zodiacs } = require('../lib/zodiacs-data.js');

describe('zodiacs routes', () => {
  it('/zodiacs should return a list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    const expected = zodiacs.map((zodiac) => {
      return { id: zodiac.id, name: zodiac.name };
    });
    expect(res.body).toEqual(expected);
  });

  it('/zodiacs/:id should return zodiac detail', async () => {
    const res = await request(app).get('/zodiacs/1');
    const aquarius = {
      id: '1',
      name: 'aquarius',
      dates: 'Jan 21 - Feb 19',
      symbol: 'Water Bearer',
    };
    expect(res.body).toEqual(aquarius);
  });
});

describe('horoscope routes', () => {
  it('/horoscopes/:sign should return horoscope detail', async () => {
    const res = await request(app).get('/horoscopes/aries');
    const expected = [{ horoscope: 'You are going to be funny.' }];
    expect(res.body).toEqual(expected);
  });
});
