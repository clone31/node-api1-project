// BUILD YOUR SERVER HERE
const express = require('express');
const User = require('./users/model.js')
const server = express();
server.use(express.json())

//| Method | URL            | Description                                                                                            |
//| ------ | -------------- | ------------------------------------------------------------------------------------------------------ |
//| POST   | /api/users     | Creates a user using the information sent inside the `request body`.                                   |
//| GET    | /api/users     | Returns an array users.                                                                                |

//| GET    | /api/users/:id | Returns the user object with the specified `id`.                                                       |
//| PUT    | /api/users/:id | Updates the user with the specified `id` using data from the `request body`. Returns the modified user |
//| DELETE | /api/users/:id | Removes the user with the specified `id` and returns the deleted user.                                 |
//
//#### User Schema
//
//Each User _resource_ should conform to the following structure (AKA schema):
//
//```js
//{
//  id: "a_unique_id", // String, required
//  name: "Jane Doe",  // String, required
//  bio: "Having fun", // String, required
//}
//```
//
//#### Database Access Functions
//
//You can find them inside `api/users/model.js`. All of these functions return Promises.
//
//- `find` Resolves to the list of users (or empty array).
//- `findById` Takes an `id` and resolves to the user with that id (or null if the id does not exist).
//- `insert` Takes a new user `{ name, bio }` and resolves to the the newly created user `{ id, name, bio }`.
//- `update` Takes an `id` and an existing user `{ name, bio }` and resolves the updated user `{ id, name, bio}` (or null if the id does not exist).
//- `remove` Takes an `id`  and resolves to the deleted user `{ id, name, bio }`.
//
//#### Endpoint Specifications
///When the client makes a `POST` request to `/api/users`:
//
//- If the request body is missing the `name` or `bio` property:
//
//  - respond with HTTP status code `400` (Bad Request).
//  - return the following JSON response: `{ message: "Please provide name and bio for the user" }`.
//
//- If the information about the _user_ is valid:
//
//  - save the new _user_ the the database.
//  - respond with HTTP status code `201` (Created).
//  - return the newly created _user document_ including its id.
//
//- If there's an error while saving the _user_:
//  - respond with HTTP status code `500` (Server Error).
//  - return the following JSON object: `{ message: "There was an error while saving the user to the database" }`.
//
//When the client makes a `GET` request to `/api/users`:
//
//- If there's an error in retrieving the _users_ from the database:
//  - respond with HTTP status code `500`.
//  - return the following JSON object: `{ message: "The users information could not be retrieved" }`.
//
//When the client makes a `GET` request to `/api/users/:id`:
//
//- If the _user_ with the specified `id` is not found:
//
//  - respond with HTTP status code `404` (Not Found).
//  - return the following JSON object: `{ message: "The user with the specified ID does not exist" }`.
//
//- If there's an error in retrieving the _user_ from the database:
//  - respond with HTTP status code `500`.
//  - return the following JSON object: `{ message: "The user information could not be retrieved" }`.
//
//When the client makes a `DELETE` request to `/api/users/:id`:
//
//- If the _user_ with the specified `id` is not found:
//
//  - respond with HTTP status code `404` (Not Found).
//  - return the following JSON object: `{ message: "The user with the specified ID does not exist" }`.
//
//- If there's an error in removing the _user_ from the database:
//  - respond with HTTP status code `500`.
//  - return the following JSON object: `{ message: "The user could not be removed" }`.
//
//When the client makes a `PUT` request to `/api/users/:id`:
//
//- If the _user_ with the specified `id` is not found:
//
//  - respond with HTTP status code `404` (Not Found).
//  - return the following JSON object: `{ message: "The user with the specified ID does not exist" }`.
//
//- If the request body is missing the `name` or `bio` property:
//
//  - respond with HTTP status code `400` (Bad Request).
//  - return the following JSON response: `{ message: "Please provide name and bio for the user" }`.
//
//- If there's an error when updating the _user_:
//
//  - respond with HTTP status code `500`.
//  - return the following JSON object: `{ message: "The user information could not be modified" }`.
//
//- If the user is found and the new information is valid:
//
//  - update the user document in the database using the new information sent in the `request body`.
//  - respond with HTTP status code `200` (OK).
//  - return the newly updated _user document_.
//
module.exports = server; // EXPORT YOUR SERVER instead of {}
