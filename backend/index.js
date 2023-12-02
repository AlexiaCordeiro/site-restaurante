import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Samyriss123#@!",
  database: "bd1",
});

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Olá, este é o backend!");
});

app.get("/login", (req, res) => {
  const q = "select * from usuario";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const q =
    "insert into usuario (`email`, `nome`, `senha`, `tipo_usuario`) values (?)";
  const values = [
    req.body.email,
    req.body.nome,
    req.body.senha,
    req.body.tipo_usuario,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("User has been create");
  });
});

app.get("/products", (req, res) => {
  const q = "select * from produto";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/products", (req, res) => {
  const q =
    "insert into produto (`id_produto`, `nome`, ` preco`, `descricao`, `id_categoria`) values (?)";
  const values = [
    req.body.id_produto,
    req.body.nome,
    req.body.preco,
    req.body.descricao,
    req.body.id_categoria,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Products has been create");
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
