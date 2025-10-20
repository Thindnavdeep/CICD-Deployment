const request = require('supertest');
const { app, server } = require('../index');

describe('GET /', () => {
  it('returns greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toMatch(/Hello/);
  });

  afterAll(() => {
    server.close(); // 👈 Important — closes the open handle
  });
});
