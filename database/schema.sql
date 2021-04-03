DROP DATABASE IF EXISTS citizens;
CREATE DATABASE citizens;
\c citizens;

CREATE TABLE users (
  user_id SERIAL,
  firebase_id VARCHAR,
  first_name VARCHAR,
  last_name VARCHAR,
  address VARCHAR,
  phone_number INT,
  email VARCHAR,
  isVolunteer BOOLEAN,
  rating INT,
  PRIMARY KEY (user_id)
);

CREATE TABLE tasks (
  task_id SERIAL,
  task_date VARCHAR,
  task_status VARCHAR,
  task_body VARCHAR,
  task_location VARCHAR,
  volunteer_name VARCHAR,
  requestor_name VARCHAR,
  start_time VARCHAR,
  end_time VARCHAR,
  PRIMARY KEY (task_id)
);