# Rated Restaurants

## A micro [yelp](https://www.yelp.co.uk/c/manchester/restaurants) clone API using Express and SQL

### Background

We are going to build an API which shows ratings, comments and cuisine for restaurants in the Greater Manchester area.
For this Sprint we will be using [PostgreSQL](https://www.postgresql.org/) and [node-postgres](https://node-postgres.com/).

### W3 Schools

When we are looking for in depth knowledge on JavaScript we tend to use MDN - W3 Schools is a very good resource for referencing and learning SQL. [Here is the link](http://www.w3schools.com/sql/default.asp)

### Goals

1.  Build up SQL schemas to create the tables for your database.
2.  Learn more about queries written in SQL.
3.  Make post requests and validate your data before it fails your schema.
4.  Solidify your knowledge of building and writing tests for APIs.

### Steps

1.  We will need database schemas to create the tables
2.  A SEED file to put some development data into your database
3.  Router for the API
4.  Controllers for each route
5.  We will need a test folder and a test file in order to test all our end-points.
6.  Connect to your database with the node-postgres library
7.  Return or insert/update the data required for each route as described below.

### Postgresql commands

USE database_name;

```
\c database_name
```

SHOW TABLES;

```
\dt
```

SHOW DATABASES;

```
\l
```

EXIT CONSOLE;

```
\q
```

### Schema breakdown

##### Areas Schema

```
     area_id       |    name     |
-------------------+-------------+
SERIAL PRIMARY KEY |   VARCHAR   |
```

Areas `have many` Restaurants

##### Restaurants Schema

```
   restaurant_id   |    name     |         area_id          |    cuisine     |  website  |
-------------------+-------------+--------------------------+----------------+-----------+
SERIAL PRIMARY KEY |   VARCHAR   | INT REFERENCES Areas(id) |    VARCHAR     |  VARCHAR  |
```

Restaurants `have many` Comments

##### Comments Schema

```
    comment_id     |          restaurant_id         |      body     |                   created_at                   |
-------------------+--------------------------------+---------------+------------------------------------------------+
SERIAL PRIMARY KEY | INT REFERENCES Restaurants(id) |    VARCHAR    |  TIMESTAMP NOT NULL DEFAULT  CURRENT_TIMESTAMP |
```

Restaurants also `have many` Ratings

##### Ratings Schema

The rating must be an integer with a minimum value of one and a maximum value of five. Research how to make this a constraint in your schema

```
     rating_id     |         restaurant_id          |    rating     |                 created_at                   |
-------------------+--------------------------------+---------------+----------------------------------------------+
SERIAL PRIMARY KEY | INT REFERENCES Restaurants(id) |    INTEGER    | TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP |
```

Ratings and Comments both belong to restaurants but have no relationship with each other. A Comment or Rating also does not need to know which Area the Restaurant it `belongs to` is in.

### API Breakdown

#### Our API will need the following routes:

1 - Get areas
returns a json object of areas and a total count of areas

```js
GET /api/areas
{
  total_areas: 2,
  areas :   [
    {
      area_id: 1,
      name: 'Altrincham'
    },
    {
      area_id: 2,
      name: 'Northern Quarter'
    }
  ]
}
```

2 - Post an area
returns a json object containing an object of the new area

```js
POST /api/areas
{
  area: {
    area_id: 12,
    name: 'your-posted-area-name'
  }
}
```

3 - Get restaurants for an area
returns a json object with the area details, containing a count and an array of the restaurants for the area

```js
GET /api/areas/:area_id/restaurants
{
    area_id: 3,
    name: 'Picadilly',
    total_restaurants: 2,
    restaurants: [
      {
        restaurant_id: 12,
        area_id: 3,
        name: 'Carluccio’s',
        cuisine: 'Italian',
        website: 'http://www.carluccios.com/'
      },
      {
        restaurant_id: 21,
        area_id: 3,
        name: 'Yo! Sushi',
        cuisine: 'Sushi',
        website: 'https://yosushi.com/restaurants/Manchester-Piccadilly-station'
      },
    ]
}
```

3a - Add a query to filter restaurants in a specific area by cuisine

```js
GET /api/areas/:area_id/restaurants?cuisine=sushi
{
    area_id: 3,
    name: 'Picadilly',
    total_restaurants: 1,
    restaurants: [
      {
        restaurant_id: 21,
        area_id: 3,
        name: 'Yo! Sushi',
        cuisine: 'Sushi',
        website: 'https://yosushi.com/restaurants/Manchester-Piccadilly-station'
      },
    ]
}
```

3b - Add a restaurant to an area
returns a json object containing an object of the new restaurant

```js
POST /api/areas/:area_id/restaurants
{
  restaurant: {
    restaurant_id: 99,
    area_id: 4,
    name: 'Delhi 2 Go',
    cuisine: 'Indian',
    website: 'https://www.dheli-2-g-.com'
  }
}
```

4 - Add a comment to a restaurant
returns a json object containing an object of the new comment

```js
POST /api/restaurants/12/comments
{
  comment: {
    comment_id: 57,
    restaurant_id: 12,
    body: 'What a place! Delicious food and even better service!',
    created_at: 961977633210
  }
}
```

5 - Get comments for a restaurant
returns a json object of the restaurant, containing a total count and an array of comments for the restaurant

```js
GET /api/restaurants/12/comments
{
    restaurant_id: 12,
    area_id: 3,
    name: 'Carluccio’s',
    cuisine: 'Italian',
    website: 'http://www.carluccios.com/'
    total_comments: 2,
    comments: [
        {
          comment_id: 312,
          restaurant_id: 12,
          body: 'My partner found this place on twitter so we decided to go have a look...',
          created_at: 961027220321
        },
        {
          comment_id: 422,
          restaurant_id: 12,
          body: 'The place is quirky and affordable - I paid less than 5 pounds for a...',
          created_at: 964224128725
        }
    ]
}
```

6 - Add a rating to a restaurant
returns a json object containing an object of the new rating

```js
POST /api/restaurants/12/ratings
{
  rating: {
    rating_id: 55,
    restaurant_id: 12,
    rating: 4,
    created_at: 961977633210
  }
}
```

7 - Get ratings for a restaurant
returns a json object of the restaurant, containing a total count and an array of ratings for the restaurant

```js
GET /api/restaurants/12/ratings
{
    restaurant_id: 12,
    area_id: 3,
    name: 'Carluccio’s',
    cuisine: 'Italian',
    website: 'http://www.carluccios.com/'
    total_ratings: 2,
    ratings: [
        {
          rating_id: 32,
          restaurant_id: 12,
          rating: 5,
          created_at: 961977633210
        },
        {
          rating_id: 47,
          restaurant_id: 12,
          rating: 2,
          created_at: 963964815076
        }
    ]
}
```

### Testing Steps

1.  Write tests for each of your API endpoints
2.  Write tests for non-existing routes, you should respond with an appropriate error code and message.
3.  Write tests for bad user inputs on valid routes:
    GET requests for id's that do not exist should return a 404.
    POST requests with invalid data should return a 400.

### Extra credit tasks

1.  Add a `sort_by` query to sort your restaurants by rating, most recently rated, most commented or most recently commented.
2.  Extend your restaurants controller to serve an average rating and a comments count.
3.  Write a route and controller for getting the average ratings across an area.

```
GET /api/areas/:area_id/average-rating
```

4.  Extend your areas route and controller to use a `sort_by` query to list the areas by the highest to lowest average rating.

```
GET /api/areas?sort_by=average_rating
```

5. Ensure that any bad routes, quereis, POST bodies or bad IDs are handled by some [https://expressjs.com/en/guide/error-handling.html](https://expressjs.com/en/guide/error-handling.html).
