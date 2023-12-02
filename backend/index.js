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
  const q = "SELECT * FROM usuario";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const q =
    "INSERT INTO usuario (`email`, `nome`, `senha`, `tipo_usuario`) VALUES (?)";
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

app.listen(8800, () => {
  console.log("Connected to backend!");
});
