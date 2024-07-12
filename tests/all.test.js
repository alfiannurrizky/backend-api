const request = require("supertest");
const { connection } = require("../config/db.js");
const app = require("../index.js");

describe("GET /api/categories", () => {
  it("should return all categories", async () => {
    const res = await request(app).get("/api/categories");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("data");
  });
});

describe("GET /api/products", () => {
  it("should return all products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("data");
  });
});

describe("GET /api/items", () => {
  it("should return all items with category names", async () => {
    const res = await request(app).get("/api/items");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("data");
  });
});

afterAll((done) => {
  connection.end();
  done();
});
