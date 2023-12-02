import cors from 'cors';
import express from 'express';
import mysql from 'mysql';

const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '27129421',
  database: 'bd1',
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('Olá, este é o backend!');
});

<<<<<<< HEAD
app.get('/login', (req, res) => {
  const q = 'SELECT * FROM usuario';
=======
app.get("/login", (req, res) => {
  const q = "select * from usuario";
>>>>>>> cc4a13fa2823122635d3552292456b1979a8f2e8
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/login', (req, res) => {
  const q =
<<<<<<< HEAD
    'INSERT INTO usuario (`email`, `nome`, `senha`, `tipo_usuario`) VALUES (?)';
=======
    "insert into usuario (`email`, `nome`, `senha`, `tipo_usuario`) values (?)";
>>>>>>> cc4a13fa2823122635d3552292456b1979a8f2e8
  const values = [
    req.body.email,
    req.body.nome,
    req.body.senha,
    req.body.tipo_usuario,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('User has been created');
  });
});

app.get('/categories', (req, res) => {
  const q = 'SELECT * FROM categoria_produto';
  db.query(q, (err, categories) => {
    if (err) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      res.json(categories);
    }
  });
});

app.post('/products', (req, res) => {
  const { nome, preco, descricao, id_categoria } = req.body;
  const q =
    'INSERT INTO produto (`nome`, `preco`, `descricao`, `id_categoria`) VALUES (?, ?, ?, ?)';
  const values = [nome, preco, descricao, id_categoria];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error('Error adding product:', err);
      return res.status(500).json({ message: 'Failed to add product' });
    }
    console.log('Product added successfully!');
    return res.status(200).json({ message: 'Product added successfully' });
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
  console.log('Connected to backend!');
});
