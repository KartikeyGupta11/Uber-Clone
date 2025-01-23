# User Registration Endpoint Documentation

## Endpoint

`POST /users/register`

## Description

This endpoint is used to register a new user in the system.

## Request Body

The request body must be in JSON format and include the following fields:

- `username` (string, required): The desired username for the new user.
- `email` (string, required): The email address of the new user.
- `password` (string, required): The password for the new user.
- `phone` (string, optional): The phone number of the new user.

Example:

```json
{
  "username": "john_doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "phone": "123-456-7890"
}
```

## Response

### Success Response

- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "message": "User registered successfully",
    "userId": "unique_user_id"
  }
  ```

### Error Responses

- **Status Code**: `400 Bad Request`

  - **Reason**: Missing or invalid fields in the request body.
  - **Body**:
    ```json
    {
      "error": "Invalid request data"
    }
    ```

- **Status Code**: `409 Conflict`

  - **Reason**: Email or username already exists.
  - **Body**:
    ```json
    {
      "error": "Email or username already exists"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Reason**: An unexpected error occurred on the server.
  - **Body**:
    ```json
    {
      "error": "Internal server error"
    }
    ```

## Example Request

```bash
curl -X POST http://yourapi.com/users/register \
-H "Content-Type: application/json" \
-d '{
    "username": "john_doe",
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "phone": "123-456-7890"
}'
```

### Example Response

- `user` (object):

  - `fullname` (object).
    - `firstName` (string): User's first name.
    - `lastName` (string): User's last name.
  - `email` (string): User's email address.
  - `password` (string): User's password (minimum 6 characters)

- `token` (string): JWT Token

# User Login Endpoint Documentation

## Endpoint

`POST /users/login`

## Description

This endpoint authenticates a user and returns a JWT token for subsequent requests.

## Request Body

The request body must be in JSON format and include the following fields:

- `email` (string, required): The user's email address.
- `password` (string, required): The user's password.

Example:

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Response

### Success Response

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "token": "jwt_token_string",
    "user": {
      "fullname": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

### Error Responses

- **Status Code**: `400 Bad Request`

  - **Reason**: Missing or invalid fields in the request body.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "Invalid email format",
          "param": "email"
        }
      ]
    }
    ```

- **Status Code**: `401 Unauthorized`
  - **Reason**: Invalid credentials.
  - **Body**:
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

## Example Request

```bash
curl -X POST http://yourapi.com/users/login \
-H "Content-Type: application/json" \
-d '{
    "email": "john.doe@example.com",
    "password": "securePassword123"
}'
```

### Example Response

- `user` (object):

  - `fullname` (object).
    - `firstName` (string): User's first name.
    - `lastName` (string): User's last name.
  - `email` (string): User's email address.
  - `password` (string): User's password (minimum 6 characters)

- `token` (string): JWT Token

# User Profile Endpoint Documentation

## Endpoint

`GET /users/profile`

## Description

This endpoint retrieves the authenticated user's profile information.

## Request Headers

- `Authorization` (string, required): The JWT token in the format `Bearer <token>`.

## Response

### Success Response

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

### Error Responses

- **Status Code**: `401 Unauthorized`
  - **Reason**: Missing or invalid token.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

## Example Request

```bash
curl -X GET http://yourapi.com/users/profile \
-H "Authorization: Bearer jwt_token_string"
```

# User Logout Endpoint Documentation

## Endpoint

`GET /users/logout`

## Description

This endpoint logs out the authenticated user by invalidating the JWT token.

## Request Headers

- `Authorization` (string, required): The JWT token in the format `Bearer <token>`.

## Response

### Success Response

- **Status Code**: `200 OK`
- **Body**:
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

### Error Responses

- **Status Code**: `401 Unauthorized`
  - **Reason**: Missing or invalid token.
  - **Body**:
    ```json
    {
      "message": "Unauthorized"
    }
    ```

## Example Request

```bash
curl -X GET http://yourapi.com/users/logout \
-H "Authorization: Bearer jwt_token_string"
```

## Example Response

- `user` (object):

  - `fullname` (object).
    - `firstName` (string): User's first name.
    - `lastName` (string): User's last name.
  - `email` (string): User's email address.

# Captain Registration Endpoint Documentation

## Endpoint

`POST /captains/register`

## Description

This endpoint is used to register a new captain in the system.

## Request Body

The request body must be in JSON format and include the following fields:

- `fullname` (object, required):
  - `firstName` (string, required): The first name of the captain. Must be at least 3 characters long.
  - `lastName` (string, optional): The last name of the captain.
- `email` (string, required): The email address of the captain. Must be a valid email format.
- `password` (string, required): The password for the captain. Must be at least 6 characters long.
- `vehicle` (object, required):
  - `model` (string, required): The model of the vehicle. Must be at least 3 characters long.
  - `vehicleType` (string, required): The type of the vehicle. Must be one of `Sedan`, `HatchBack`, `SUV`, `Bike`, `Auto`.
  - `plate` (string, required): The plate number of the vehicle. Must be at least 3 characters long.
  - `color` (string, required): The color of the vehicle. Must be at least 3 characters long.
  - `capacity` (number, required): The capacity of the vehicle. Must be at least 1.

Example:

```json
{
  "fullname": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "vehicle": {
    "model": "Toyota",
    "vehicleType": "Sedan",
    "plate": "ABC123",
    "color": "Red",
    "capacity": 4
  }
}
```

## Response

### Success Response

- **Status Code**: `201 Created`
- **Body**:
  ```json
  {
    "token": "jwt_token_string",
    "captain": {
      "fullname": {
        "firstName": "John",
        "lastName": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "model": "Toyota",
        "vehicleType": "Sedan",
        "plate": "ABC123",
        "color": "Red",
        "capacity": 4
      }
    }
  }
  ```

### Error Responses

- **Status Code**: `400 Bad Request`

  - **Reason**: Missing or invalid fields in the request body.
  - **Body**:
    ```json
    {
      "errors": [
        {
          "msg": "First Name must be of atleast 3 characters",
          "param": "fullname.firstName"
        },
        {
          "msg": "Invalid email format",
          "param": "email"
        }
      ]
    }
    ```

- **Status Code**: `409 Conflict`

  - **Reason**: Email already exists.
  - **Body**:
    ```json
    {
      "message": "Captain already exists with this email"
    }
    ```

- **Status Code**: `500 Internal Server Error`
  - **Reason**: An unexpected error occurred on the server.
  - **Body**:
    ```json
    {
      "error": "Internal server error"
    }
    ```

## Example Request

```bash
curl -X POST http://yourapi.com/captains/register \
-H "Content-Type: application/json" \
-d '{
    "fullname": {
      "firstName": "John",
      "lastName": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securePassword123",
    "vehicle": {
      "model": "Toyota",
      "vehicleType": "Sedan",
      "plate": "ABC123",
      "color": "Red",
      "capacity": 4
    }
}'
```

### Example Response

- `captain` (object):

  - `fullname` (object):
    - `firstName` (string): Captain's first name.
    - `lastName` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object):
    - `model` (string): Vehicle model.
    - `vehicleType` (string): Vehicle type.
    - `plate` (string): Vehicle plate number.
    - `color` (string): Vehicle color.
    - `capacity` (number): Vehicle capacity.

- `token` (string): JWT Token
