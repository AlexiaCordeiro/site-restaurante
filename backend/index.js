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

app.get('/login', (req, res) => {
  const q = 'SELECT * FROM usuario';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post('/login', (req, res) => {
  const q =
    'INSERT INTO usuario (`email`, `nome`, `senha`, `tipo_usuario`) VALUES (?)';
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

app.listen(8800, () => {
  console.log('Connected to backend!');
});
