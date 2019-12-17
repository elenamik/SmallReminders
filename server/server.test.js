require('./schema')
const app = require('./app');
const request = require('supertest');
const http = require('http');
const mongoDB = require('./utils/mongoDB');

let server;


beforeAll(done => {
  server = http.createServer(app)
  server.listen(done)
  mongoDB.connect()
});

afterAll(async (done) => {
  server.close(done)
  await mongoDB.close()
});

describe('Sample Test', () => {
    it('should always return true === true', () => {
      expect(true).toBe(true)
    })
})

describe('/GET principles/read/', () => {
  it( 'should return a JSON object with all principles for user', async ( ) => {
    const res = await request(server).get('/principles/read');
    console.log(res.body)
    expect(res.statusCode).toBe(200);
  }
  )
})

