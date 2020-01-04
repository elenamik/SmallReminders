require('dotenv').config();

describe('dotenv loader', () => {
  it('should load database connection string', () => {
    expect(process.env.MONGO_USER).not.toBeUndefined();
  });
});
