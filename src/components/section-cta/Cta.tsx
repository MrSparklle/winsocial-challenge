import { Button, Container, OfferCard } from "components";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Cta.module.scss";

const Cta = () => {
  const cx = classNames.bind(styles);

  return (
    <Container className={styles.ctaContainer}>
      <OfferCard
        className={styles.offer1}
        title="teste"
        price={10}
        address="teste"
        beds={2}
        bathrooms={1}
        dimensions="12 x 15"
        imageSrc="1.png"
        width="324"
        noDescription={true}
      />
      <OfferCard
        className={styles.offer2}
        title="teste"
        price={10}
        address="teste"
        beds={2}
        bathrooms={1}
        dimensions="12 x 15"
        imageSrc="2.png"
        width="194"
        showLike={false}
        cardSize="small"
        outline={true}
        noDescription={true}
      />

      <h1>Compre, alugue, ou venda o seu imóvel</h1>
      <h4>
        Uma grande plataforma para comprar, vender, ou alugar os seus imóveis
        sem qualquer compromisso.
      </h4>
      <div className={styles.ctaNumbers}>
        <div>
          <span>50k+</span>
          <p>inquilinos</p>
        </div>
        <div>
          <span>10k+</span>
          <p>proprietários</p>
        </div>
      </div>
      <div className={styles.ctaSearch}>
        <div className={styles.tabs}>
          <ul>
            <li className={cx({ active: true })}>Alugue</li>
            <li>Compre</li>
            <li>Venda</li>
          </ul>
        </div>
        <div className={styles.fields}>
          <div>
            <label htmlFor="">Localização</label>
            <input type="text" value="Barcelona, Spain" />
          </div>
          <div>
            <label htmlFor="">Quando</label>
            <input type="date" placeholder="Selecionar uma data" />
          </div>
          <Button type="primary">Procurar</Button>
        </div>
      </div>
    </Container>
  );
};

export default Cta;
