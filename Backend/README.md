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
