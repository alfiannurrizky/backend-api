const express = require("express");
const { connection, query } = require("./config/db");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/api/categories", async (req, res) => {
  try {
    const rows = await query("SELECT * FROM categories");
    res.status(200).send({ data: rows });
  } catch (err) {
    res.send({ error: err });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const rows = await query("SELECT * FROM products");
    res.status(200).send({ data: rows });
  } catch (err) {
    res.send({ error: err });
  }
});

app.get("/api/items", async (req, res) => {
  try {
    const rows = await query(
      "SELECT a.product_name, a.price, a.stock, b.category_name FROM products a LEFT JOIN categories b ON a.category_id = b.category_id"
    );
    res.status(200).send({ data: rows });
  } catch (err) {
    res.send({ error: err });
  }
});

app.listen(3000, () => {
  console.log(`Server Running On Port 3000`);
});

module.exports = app;
