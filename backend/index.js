import express from "express";
import { db } from "./db.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM cliente", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
