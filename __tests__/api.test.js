const request = require('supertest');
const app = require('../app');

describe('/api', () => {
  describe('/areas', () => {
    test('GET - status 200 - returns all areas', () => {
      return request(app)
        .get('/api/areas')
        .expect(200)
        .then((response) => {
          expect(response.body.areas.length).toBe(6);
          expect(response.body.areas[0]).toEqual({
            area_id: 1,
            area_name: 'Manchester',
          });
        });
    });
  });
});
