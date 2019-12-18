/**
 * Testing Principles CRUD API
 */

// Dependencies
// require('./schema')
// const app = require('./app');
// const request = require('supertest');
// const http = require('http');
// //const mongoDB = require('./utils/mongoDB');
// let server;
// const log=console.log // use this for logging
// let testElement;

// // Staging
// beforeAll(done => {
//   console.log = function() {} // disabling regular applicaiton logging in terminal
//   server = http.createServer(app)
//   server.listen(done)
//   mongoDB.connect()
// });

// // Tear Down
// afterAll(async () => {
//   await server.close()
//   await mongoDB.close()
// });

describe('Hello world', () => {
  it ('should always pass', () => {
    expect(true).toEqual(true)

  })
})

// describe('/GET principles/read/', () => {
//   it( 'should return a JSON object with all principles for user', async ( ) => {
//     const res = await request(server).get('/principles/read');
//     expect(res.body).toEqual(
//       expect.objectContaining({ 
//         'success': true 
//       }))
//   })
// })

// describe('/POST principles/add/?content', () => {
//   it( 'should add a principle and return resulting JSON object', async ( ) => {
//     const res = await request(server).post('/principles/add')
//     .send({
//       content: "for testing"
//     })
//     expect(res.body).toEqual(
//       expect.objectContaining({
//         'success': true
//     }))
//     testElement = res.body.result
//     log('added test element',testElement._id)
//   })

//   it( 'should fail if content not provided', async ( ) => {
//     const res = await request(server).post('/principles/add')
//     .send({
//       content: undefined
//     })
//     expect(res.body).toEqual(
//       expect.objectContaining({
//         'success': false
//     }))
//   })
// })

// describe('/POST principles/update/?id?content', () => {
//   it( 'should delete a principle and return resulting JSON object', async ( ) => {
//     const res = await request(server).post('/principles/update')
//     .send({
//       id: testElement._id,
//       content: 'for testing - update'
//     })
//     expect(res.body).toEqual(
//       expect.objectContaining({
//         'success': true
//     }))
//     log('updated test element',testElement._id)

//   })

//   it( 'should fail if content is not provided', async ( ) => {
//     const res = await request(server).post('/principles/update')
//     .send({
//       id: testElement._id,
//       content: undefined
//     })
//     expect(res.body).toEqual(
//       expect.objectContaining({
//         'success': false
//     }))
//   })

//   it( 'should fail if targetId is not provided', async ( ) => {
//     const res = await request(server).post('/principles/update')
//     .send({
//       id: undefined,
//       content: 'for testing'
//     })
//     expect(res.body).toEqual(
//       expect.objectContaining({
//         'success': false
//     }))
//   })

// })

// describe('/POST principles/delete/?id', () => {
//   it( 'should delete a principle and return resulting JSON object', async ( ) => {
//     const res = await request(server).post('/principles/delete')
//     .send({
//       id: testElement._id
//     })
//     expect(res.body).toEqual(
//       expect.objectContaining({
//         'success': true
//       })
//     )
//     log('deleted test element',testElement._id)

//   })

//   it( 'should fail if delete id not given', async ( ) =>{
//     const res = await request(server).post('/principles/delete')
//     .send({
//       id: undefined
//     })
//     expect(res.body).toEqual(
//       expect.objectContaining({
//         'success': false
//       })
//     )
//   }
    
//   )

// })

