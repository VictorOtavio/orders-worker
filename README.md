# Orders Worker

Service that process a queue of orders for a marketplace.

## Running

### Development mode

```bash
# Duplicate .env file with configurations
cp .env.example .env
# Start MongoDB
docker-compose up -d mongo
# Install dependencies
npm install
# Run application
npm start
```

### Production mode

```bash
# Compile and start all services
docker-compose up -d app
```

In both cases, the application will be available through the URL: [http://127.0.0.1:3000](http://127.0.0.1:3000). The endpoints available are described below:

## Endpoints

### GET /orders

```http
GET "http://127.0.0.1:3000/orders" HTTP/1.1
Accept: application/json
```

Returns the list with all orders in the queue awaiting processing.

### POST /orders

```http
POST "http://127.0.0.1:3000/orders" HTTP/1.1
Accept: application/json
Content-Type: application/json

{
	"status": "Created",
	"price": "25600",
	"cartID": "90CCF5CE-DECO-DIAI-71F9-D478628F601F",
	"partnerID": "F851E323-DECO-DIAI-C95A-32D96A1928E4",
	"customerID": "ADBF8C19-DECO-DIAI-194F-C1EF4E6B1E48"
}
```

Register a new order in the processing queue.

### GET /orders/:id

```http
GET "http://127.0.0.1:3000/orders/5e790c93c651190c557cc58e" HTTP/1.1
Accept: application/json
```

Executes the queue for a given order and returns the data.