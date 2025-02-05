---

# Shipment API

This is a RESTful API for managing shipment information. The API provides functionality to create, retrieve, update, and delete shipments. It interacts with a MongoDB database for storing shipment data.

## Features

- **Create Shipment**: Add a new shipment with details such as tracking number, sender, recipient, cargo type, etc.
- **Get Shipment by Tracking Number**: Retrieve shipment details using the tracking number.
- **Update Shipment**: Modify the details of an existing shipment.
- **Delete Shipment**: Remove a shipment from the system using its ID.

## Technology Stack

- **Node.js**: Backend runtime for handling API requests.
- **Express**: Web framework to create the RESTful API.
- **MongoDB**: NoSQL database to store shipment data.
- **Mongoose**: ODM (Object Document Mapper) for interacting with MongoDB.
- **dotenv**: Used to load environment variables like the MongoDB connection string.

## Requirements

- Node.js (v14 or higher)
- MongoDB instance running locally or using a MongoDB cloud service (e.g., MongoDB Atlas)
- `npm` or `yarn` for managing dependencies

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/shipment-api.git
   ```

2. **Navigate to the project folder**:

   ```bash
   cd shipment-api
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the root directory of the project and add the following:

   ```env
   MONGO_URI=your_mongo_connection_string_here
   PORT=5000
   ```

   Replace `your_mongo_connection_string_here` with the MongoDB connection URI.

5. **Run the server**:

   ```bash
   npm start
   ```

   This will start the server on `http://localhost:5000`.

## Endpoints

### 1. **Create a Shipment**

- **URL**: `/api/shipments`
- **Method**: `POST`
- **Request Body**:

  ```json
  {
    "trackingNumber": "123456",
    "sender": "John Doe",
    "recipient": "Jane Smith",
    "cargoType": "fragile",
    "weight": 2,
    "destination": "New York"
  }
  ```

- **Response**:
  
  On success:

  ```json
  {
    "trackingNumber": "123456",
    "sender": "John Doe",
    "recipient": "Jane Smith",
    "cargoType": "fragile",
    "weight": 2,
    "destination": "New York",
    "_id": "60b7c1f23d4b7a1a5c9f4675"
  }
  ```

  On failure:

  ```json
  {
    "message": "Error message here"
  }
  ```

---

### 2. **Get Shipment by Tracking Number**

- **URL**: `/api/shipments/:trackingNumber`
- **Method**: `GET`
- **URL Params**: 

  `trackingNumber` - The tracking number of the shipment to retrieve.

- **Response**:

  ```json
  {
    "trackingNumber": "123456",
    "sender": "John Doe",
    "recipient": "Jane Smith",
    "cargoType": "fragile",
    "weight": 2,
    "destination": "New York",
    "_id": "60b7c1f23d4b7a1a5c9f4675"
  }
  ```

---

### 3. **Update a Shipment**

- **URL**: `/api/shipments/:id`
- **Method**: `PUT`
- **URL Params**:

  `id` - The ID of the shipment to update.

- **Request Body**:

  ```json
  {
    "trackingNumber": "123456",
    "sender": "John Doe",
    "recipient": "Jane Smith",
    "cargoType": "electronics",
    "weight": 3,
    "destination": "Los Angeles"
  }
  ```

- **Response**:

  ```json
  {
    "trackingNumber": "123456",
    "sender": "John Doe",
    "recipient": "Jane Smith",
    "cargoType": "electronics",
    "weight": 3,
    "destination": "Los Angeles",
    "_id": "60b7c1f23d4b7a1a5c9f4675"
  }
  ```

---

### 4. **Delete a Shipment**

- **URL**: `/api/shipments/:id`
- **Method**: `DELETE`
- **URL Params**:

  `id` - The ID of the shipment to delete.

- **Response**:

  On success:

  ```json
  {
    "message": "Shipment deleted successfully"
  }
  ```

  On failure:

  ```json
  {
    "message": "Error message here"
  }
  ```

## Services and Business Logic

- All business logic is handled in the service layer located in the `services` directory. Controllers interact with the services to manage the CRUD operations.

## Troubleshooting

1. **Server not starting**: Ensure MongoDB is running and that the `MONGO_URI` is correctly set in the `.env` file.
2. **No shipments in database**: If you're not seeing any data in the database, ensure that the `insertPricingData` function is called after establishing the connection to MongoDB.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

You can tailor this README further based on your exact implementation, including more specific details about your routes, error handling, or how to extend the API. Let me know if you'd like further modifications!