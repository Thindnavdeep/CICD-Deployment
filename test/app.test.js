const request = require('supertest');
const app = require('../index'); // import the app, not server

describe('GET /', () => {
  it('returns greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hello/);
  });
});
