const principles = require('./principles')

test('Reads data from MongoGB given an ObjectId', () => {
    expect(principles.read())
})