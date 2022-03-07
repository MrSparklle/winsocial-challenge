import React from "react";
import { ReactComponent as IconLogo } from "../../assets/icon-logo.svg";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";
import styles from "./Navbar.module.scss";
import { Button } from "components";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <nav>
        <IconLogo />
        <ul>
          <li>Alugar</li>
          <li>Comprar</li>
          <li>Vender</li>
          <li>
            Gerenciar Propriedade
            <ArrowDown />
          </li>
          <li>
            Recursos
            <ArrowDown />
          </li>
        </ul>
        <Button type="secondary">Entrar</Button>
        <Button type="primary">Cadastrar</Button>
      </nav>
    </div>
  );
};

export default Navbar;
