# Contact API

Contact API enables contact management, built using technologies such as Express.js, MongoDB, MongoDB Atlas, and extensions: Bcrypt, Dotenv, Jwt, and Mongoose.

#


## How Use?

 - Create account in [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
 - Create Database
 - Get Connection String in Data Services -> Connect -> Drivers -> Step 3.
 - Create .env using example.env
 

## Installation

```bash
  cd api-express-mongoose-jwt
  npm install
  node --watch server
```
    
## API Reference

#### Create user

```http
  POST /api/users/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | **Required** |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Login and get 15min Access Token/ per Login

```http
  POST /api/users/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Get current User information

```http
  GET /api/users/current
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token` | `string (Auth)` | **Required** |


#### Create Contact

```http
  POST /api/contacts/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token` | `string (Auth)` | **Required** |
| `name` | `string (Body)` | **Required** |
| `email` | `string (Body)` | **Required** |
| `phone` | `string (Body)` | **Required** |


#### Get all Contacts

```http
  GET /api/contacts/
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token` | `string (Auth)` | **Required** |


#### Get Contact

```http
  GET /api/contacts/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token` | `string (Auth)` | **Required** |


#### Edit Contact

```http
  PUT /api/contacts/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token` | `string (Auth)` | **Required** |
| `name` | `string (Body)` 
| `email` | `string (Body)` 
| `phone` | `string (Body)` 


#### Delete Contact

```http
  DELETE /api/contacts/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Bearer Token` | `string (Auth)` | **Required** |
