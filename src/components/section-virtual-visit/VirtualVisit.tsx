import { Button, Container } from "components";
import React from "react";
import house_png from "../../assets/house.png";
import styles from "./VirtualVisit.module.scss";
import classNames from "classnames/bind";
import { ReactComponent as PlayIcon } from "../../assets/play-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/home-icon.svg";

const VirtualVisit = () => {
  const cx = classNames.bind(styles);

  return (
    <Container className={styles.visitaVirtualContainer}>
      <div className={styles.imgContainer}>
        <img src={house_png} alt="House" />
        <div className={cx({ floatCard: true, top: true })}>
          <PlayIcon />
          <div>
            <h4>Visita virtual a casa</h4>{" "}
            <p>Fornecemos-lhe uma visita virtual</p>
          </div>
        </div>
        <div className={cx({ floatCard: true, bottom: true })}>
          <HomeIcon />
          <div>
            <h4>Encontrar o melhor negócio</h4>{" "}
            <p>Procurar milhares de propriedades</p>
          </div>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.buttonContainer}>
          <Button type="secondary" active={true}>
            Para inquilinos
          </Button>
          <Button type="clear">Para proprietários</Button>
        </div>
        <h2>Facilitamos a vida dos inquilinos e proprietários.</h2>
        <p>
          Quer seja vender a sua casa atual, obter financiamento, ou comprar uma
          nova casa, tornamos fácil e eficiente. A melhor parte? Poupará um
          monte de dinheiro e tempo com os nossos serviços.
        </p>
        <Button type="primary">Veja Mais</Button>
      </div>
    </Container>
  );
};

export default VirtualVisit;
