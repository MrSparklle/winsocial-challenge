import React from "react";
import styles from "./Testimony.module.scss";
import { ReactComponent as MiraCulos } from "../../assets/mira_culos.svg";
import { ReactComponent as RobertoSa } from "../../assets/roberto_sa.svg";
import { Container } from "components";

const Testimony = () => {
  return (
    <Container className={styles.testymonyContainer}>
      <h2>Depoimentos</h2>
      <p>
        Veja o que os nossos administradores de imóveis, proprietários e
        inquilinos têm a dizer
      </p>
      <h4>
        “WinRent é a plataforma a qual vou quase diariamente para fazer compras
        na 2ª casa e condomínio de férias, ou apenas para olhar casas de sonho
        em novas áreas. Obrigado pelas divertidas compras e análises
        comparativas, WinRent!”
      </h4>
      <span>
        <strong>Mira Culos,</strong> Locatária
      </span>
      <div className={styles.persons}>
        <MiraCulos />
        <RobertoSa />
      </div>
    </Container>
  );
};

export default Testimony;
