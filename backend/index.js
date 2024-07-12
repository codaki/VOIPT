import cors from "cors";
import express from "express";
import { db } from "./db.js";
const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/usuarios", (req, res) => {
  db.query("SELECT * FROM cliente", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.delete("/api/deleteUsuarios/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM cliente WHERE cliente_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
