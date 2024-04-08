import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <img src={foto} alt="Máquina de escrever." />
      <div>
        <h2>Entre em contato</h2>
        <ul className={styles.dados}>
          <li>souzanatha04@gmail.com</li>
          <li>(43) 98853-8960</li>
          <li>Cornélio Procópio - Paraná</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
