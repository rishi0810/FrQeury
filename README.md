# FrQuery - JWT Authentication Form

FrQuery is a simple authentication form using **JWT** and **MongoDB**. Users can **sign up, log in, and log out**, with their information securely stored in a database. The app supports environment variables for **JWT\_SECRET, PORT, and MongoDB URL** to allow customization.

## Features

- **User Authentication**: Secure login and signup with JWT.
- **MongoDB Storage**: Stores user email, password (hashed), and timestamps.
- **Token-Based Access**: JWT is used for session management.
- **REST API Routes**:
  - `/signup` → Register a new user.
  - `/login` → Authenticate a user.
  - `/logout` → Remove session token.
- **Environment Configurable**: Users can set custom values in `.env`.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/FrQuery.git
   cd FrQuery
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure:
   ```env
   JWT_SECRET=your_secret_key
   PORT= random_port
   mongourl=your_mongodb_url
   ```
4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### 1. User Signup

- **Endpoint**: `POST /signup`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```

### 2. User Login

- **Endpoint**: `POST /login`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "yourpassword"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Login successful",
    "email" : "your_email",
    "createdAt" : "your_signup_date",
    "id" : "mongodb_id"
  }
  ```

### 3. User Logout

- **Endpoint**: `GET /logout`

  

## Folder Structure

```
FrQuery/
├── controllers/      # Handles signup, login, logout logic
├── db/               # Connection for MongoDB
├── models/           # User schema for MongoDB
├── routes/           # API route handlers
├── util/             # PW Hashing Function & JWT token handlers 
├── index.js          # Main Entry Point
├── .env              # Configuration file
└── package.json      # Dependencies and scripts
```

## Contributing

Feel free to fork the repository and submit pull requests.

##

