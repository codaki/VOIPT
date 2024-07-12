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

app.get("/api/getUsuarioId/:id", (req, res) => {
  const id = req.params.id;
  db.query("SELECT * FROM cliente WHERE cliente_id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred");
    }
    res.send(result);
  });
});
app.get("/api/getProductos/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT p.*,cp.edad FROM producto AS p RIGHT JOIN cliente_producto AS cp ON p.producto_id = cp.inter_producto where inter_cliente = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("An error occurred");
      }
      res.send(result);
    }
  );
});

app.get("/api/getGestiones/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT g.gestion_id,g.gestion_nombre,gc.observación,gt.gestion_tipo_nombre,gc.fecha,gc.numero,gc.valor_compromiso FROM gestion_cliente AS gc INNER JOIN gestion AS g ON gc.gc_gestion = g.gestion_id INNER JOIN gestion_tipo as gt ON g.gestion_tipo = gt.gestion_tipo_id where gc.gc_cliente = ?;",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("An error occurred");
      }
      res.send(result);
    }
  );
});

app.get("/api/getProductos", (req, res) => {
  db.query("SELECT * FROM producto", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred");
    }
    res.send(result);
  });
});

app.post("/api/enviarProductos", (req, res) => {
  console.log(req.body);
  const { cliente, producto, edad } = req.body;
  db.query(
    "INSERT INTO cliente_producto (inter_cliente,inter_producto,edad) VALUES (?,?,?)",
    [cliente, producto, edad],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("An error occurred");
      }
      res.send(result);
    }
  );
});

app.post("/api/enviarGestion", (req, res) => {
  console.log(req.body);
  const { cliente, gestion, observacion, numero, valorCompromiso } = req.body;
  db.query(
    "INSERT INTO gestion_cliente (gc_cliente,gc_gestion,observación,numero,valor_compromiso) VALUES (?,?,?,?,?)",
    [cliente, gestion, observacion, numero, valorCompromiso],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("An error occurred");
      }
      res.send(result);
    }
  );
});

app.get("/api/getTiposGestiones", (req, res) => {
  db.query("SELECT * FROM gestion_tipo", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred");
    }
    res.send(result);
  });
});

app.get("/api/getGestiones", (req, res) => {
  db.query("SELECT * FROM gestion", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("An error occurred");
    }
    res.send(result);
  });
});

app.get("/api/getGestionesId/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM gestion WHERE gestion_tipo = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("An error occurred");
      }
      res.send(result);
    }
  );
});

app.get("/api/getNumeros/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT cliente_casa,cliente_movil,cliente_oficina,cliente_opcional FROM cliente where cliente_id = ?;",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).send("An error occurred");
      }
      res.send(result);
    }
  );
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
