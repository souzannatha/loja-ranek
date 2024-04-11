import React from "react";
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <div className={styles.produtos + " animeLeft"}>
      <Helmet>
        <title>Ranek</title>
        <meta name="description" content="Descrição do site Ranek" />
      </Helmet>
      {produtos.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1 className={styles.nome}>{produto.nome}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Produtos;
