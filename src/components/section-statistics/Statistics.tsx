import React from "react";
import styles from "./Statistics.module.scss";
import { ReactComponent as HousePercent } from "../../assets/house-percent.svg";
import { ReactComponent as HouseZoom } from "../../assets/house-zoom.svg";
import { ReactComponent as HouseCheck } from "../../assets/house-check.svg";
import { Container } from "components";

const Statistics = () => {
  return (
    <Container className={styles.estatisticasContainer}>
      <div className={styles.box}>
        <h2>Uma nova forma de encontrar a sua casa</h2>
        <p>
          Encontre o lugar dos seus sonhos para viver com mais de 10k
          propriedades listadas.
        </p>
        <div className={styles.iconContainer}>
          <div>
            <HousePercent />
            <h4>7.4%</h4>
            <small>Taxa de Retorno de Propriedade</small>
          </div>
          <div>
            <HouseZoom />
            <h4>3,856</h4>
            <small>Imóveis em Venda e Aluguel</small>
          </div>
          <div>
            <HouseCheck />
            <h4>2,540</h4>
            <small>Transações diárias concluídas</small>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Statistics;
