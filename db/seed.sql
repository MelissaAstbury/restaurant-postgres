DROP DATABASE IF EXISTS restaurants_mc;
CREATE DATABASE restaurants_mc;

\c restaurants_mc;

CREATE TABLE areas (
  area_id SERIAL PRIMARY KEY,
  area_name VARCHAR (50) NOT NULL
);

CREATE TABLE restaurants (
restaurant_id SERIAL PRIMARY KEY,
name VARCHAR(50) NOT NULL,
area_id INT REFERENCES areas(area_id),
cuisine VARCHAR (50) NOT NULL
);

CREATE TABLE comments (
comment_id  SERIAL PRIMARY KEY,
restaurant_id INT REFERENCES restaurants(restaurant_id),
body VARCHAR (50) NOT NULL,
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ratings (
rating_id SERIAL PRIMARY KEY ,
restaurant_id INT REFERENCES restaurants(restaurant_id),
rating INT,
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO areas(area_name)
VALUES ('Manchester'), ('Liverpool'), ('Wales'), ('Birmingham'), ('Leeds'), ('Scotland');

INSERT INTO restaurants (name, area_id, cuisine) 
VALUES ('Chunky Chicken', 1, 'Chicken'),('Pizzaria', 1, 'Pizza'),('Mr Noodles', 1, 'Thai') ;

INSERT INTO comments (restaurant_id, body)
VALUES (1, 'Fast Service'), (1, 'Soggy Chips'), (1, 'Very Cold'), (1, 'Delicious');

INSERT INTO ratings(restaurant_id, rating)
VALUES (1, 5), (1, 2), (1, 3), (1, 5);

SELECT * FROM areas;
SELECT * FROM restaurants;
SELECT * FROM comments;
SELECT * FROM ratings;