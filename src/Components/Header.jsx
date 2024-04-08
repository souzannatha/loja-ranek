import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          <NavLink to="/" end className={styles.link}>
            Produtos
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="contato">
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
