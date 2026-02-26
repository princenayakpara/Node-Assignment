const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    stock: 25,
    rating: 4.3
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
    stock: 40,
    rating: 4.5
  },
  {
    id: 3,
    name: "Laptop Stand",
    category: "Accessories",
    price: 999,
    stock: 30,
    rating: 4.2
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 4999,
    stock: 12,
    rating: 4.4
  },
  {
    id: 5,
    name: "Backpack",
    category: "Fashion",
    price: 1599,
    stock: 50,
    rating: 4.1
  }
];

app.get("/",(req,res)=>{
    res.send("Express Server Added")
})

app.get("/products", (req, res) => {
  res.status(200).json(products);
});

app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      product = products[i];
      break;
    }
  }
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.status(200).json(product);
});

app.get("/products/category/:categoryName", (req, res) => {
  const category = req.params.categoryName;
  let filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].category.toLowerCase() === category.toLowerCase()) {
      filteredProducts.push(products[i]);
    }
  }
  res.status(200).json(filteredProducts);
});

app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  let index = -1;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }
  products[index] = {
    id: id,
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
    stock: req.body.stock,
    rating: req.body.rating
  };
  res.status(200).json(products[index]);
});

app.put("/products/:id/stock", (req, res) => {
  const id = parseInt(req.params.id);
  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      product = products[i];
      break;
    }
  }
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  product.stock = req.body.stock;
  res.status(200).json(product);
});

app.put("/products/:id/price", (req, res) => {
  const id = parseInt(req.params.id);
  let product = null;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      product = products[i];
      break;
    }
  }
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  product.price = req.body.price;
  res.status(200).json(product);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});