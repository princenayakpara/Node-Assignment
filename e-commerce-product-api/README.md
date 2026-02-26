# Product Management API

## Objective
Build a REST API using Express.js that manages product records stored in an in-memory JSON array.

## Features
- Manages product records (ID, Name, Category, Price, Stock, Rating).
- 7+ routes (GET, POST, PUT).
- CORS enabled.
- Error handling for non-existent products.
- Separate routes for updating stock and price.

## Implemented Routes
1. `GET /products` - Returns all products.
2. `GET /products/:id` - Returns product details by ID (Dynamic).
3. `GET /products/category/:categoryName` - Returns products belonging to a specific category (Dynamic).
4. `POST /products` - Creates a new product.
5. `PUT /products/:id` - Replaces a product completely by ID.
6. `PUT /products/:id/stock` - Updates stock of a specific product.
7. `PUT /products/:id/price` - Updates price of a specific product.

## Sample API URLs
- List all: `/products`
- Find by ID: `/products/1`
- Find by Category: `/products/category/Electronics`
- Create Product: `/products`
- Replace Product: `/products/1`
- Update Stock: `/products/1/stock`
- Update Price: `/products/1/price`

## Steps to Run Locally
1. Clone the repository.
2. Navigate to the project folder.
3. Install dependencies:
   ```bash
   npm install
   node index.js

Render Deployment Link
https://ecommerce-product-api-5izj.onrender.com/

Postman Documentation Link
https://documenter.getpostman.com/view/50464127/2sBXcGFfiM