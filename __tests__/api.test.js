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
    test('POST - status 201 - returns succesful message', () => {
      return request(app)
        .post('/api/areas')
        .send({
          area_name: 'Surrey',
        })
        .expect(201)
        .then(({ body: { area } }) => {
          expect(area).toEqual({
            area_id: 8,
            area_name: 'Surrey',
          });
        });
    });
  });

  describe('/restaurants', () => {
    test('GET - status 200 - returns all restaurants', () => {
      return request(app)
        .get('/api/restaurants')
        .expect(200)
        .then((response) => {
          expect(response.body.restaurants.length).toBe(3);
          expect(response.body.restaurants[0]).toEqual({
            restaurant_id: 1,
            name: 'Chunky Chicken',
            area_id: 1,
            cuisine: 'Chicken',
          });
        });
    });
  });

  describe('/comments', () => {
    test('GET - status 200 - returns all comments', () => {
      return request(app)
        .get('/api/comments')
        .expect(200)
        .then((response) => {
          expect(response.body.comments.length).toBe(4);
        });
    });
  });

  describe('/ratings', () => {
    test('GET - status 200 - returns all ratings', () => {
      return request(app)
        .get('/api/ratings')
        .expect(200)
        .then((response) => {
          expect(response.body.ratings.length).toBe(4);
        });
    });
  });
});
