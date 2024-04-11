import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Produto.module.css";
import { Helmet } from "react-helmet";

const Produto = () => {
  const { id } = useParams();
  const [dados, setDados] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setDados(json);
      } catch (erro) {
        setError("OCorreu algum erro");
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  if (loading === true) return <p>Carregando...</p>;
  if (error === true) return <p>{error}</p>;
  if (dados === null) return null;

  return (
    <section className={styles.produto + " animeLeft"}>
      <Helmet>
        <title>{`Ranek | ${dados.nome}`}</title>
        <meta
          name="description"
          content={`Ranek | Esse é um produto: ${dados.nome}`}
        />
      </Helmet>
      {dados.fotos.map((foto) => (
        <img key={foto.src} src={foto.src} alt={foto.titulo} />
      ))}
      <div>
        <h1>{dados.nome}</h1>
        <span className={styles.preco}>R$ {dados.preco}</span>
        <p className={styles.descricao}>{dados.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
