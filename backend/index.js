import express from "express";
import mysql from "mysql";

const app = express()


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "27129421",
    database: "test"
});

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

app.use(express.json());


app.get("/books",(req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err){
            console.log("ERROR")
            return res.json(err)
        }
        return res.json(data)
    })
})

app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `cover`) VALUES (?, ?, ?)";
    
    const { title, desc, cover } = req.body;

    if (!title || !desc || !cover) {
        return res.status(400).json({ error: "Missing required fields in request body." });
        
    }
    db.query(q, [title, desc, cover], (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Erro ao inserir na base de dados." });
        }
        return res.json(data);
    });
});



app.listen(8800, () => {
    console.log("Connected to backend.");
  });