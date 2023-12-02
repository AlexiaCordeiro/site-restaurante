import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Catalog.module.css"

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null); // Estado para armazenar o ID do produto selecionado
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProducts();
  }, []);
 
  const handleSaveProduct = (productId) => {
    // Aqui você pode implementar a lógica para salvar o ID do produto
    // Pode ser uma chamada de API, um estado global (como Redux), etc.
    console.log("Adicionar Produto:", productId);
    setSelectedProductId(productId);
  };

  return (
    <div className={styles.catalogContainer}>
      <h1 className={styles.title}>Catalogo de Produtos</h1>
      <ul>
        {products.map((product, index) => (
          <li key={product.id_produto} className={index % 2 === 0 ? styles.even : styles.odd}>
            <h2>{product.nome}</h2>
            <p className={index % 2 === 0 ? styles.green : styles.purple}>Preço: R$ {product.preco}</p>
            <p className={index % 2 === 0 ? styles.green : styles.purple}>Decrição: {product.descricao}</p>
            <p className={index % 2 === 0 ? styles.green : styles.purple}>id_Produto: {product.id_produto}</p>
             {/* Botão para salvar o ID do produto */}
             <button onClick={() => handleSaveProduct(product.id_produto)}>Adicionar Produto</button>
          </li>
        ))}
      </ul>
      <div>{/* Exibir o ID do produto selecionado */}
        {selectedProductId && <p>ID do produto selecionado: {selectedProductId}</p>}</div>
      </div>
  );
};

export default Catalog;
