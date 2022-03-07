import { Autocomplete, Button, Container, OfferCard } from "components";
import React from "react";
import classNames from "classnames/bind";
import styles from "./Cta.module.scss";
import { Address } from "models";

interface Props {
  offers: Address[];
}

const Cta = ({ offers }: Props) => {
  const cx = classNames.bind(styles);

  // Set creates a distict list of cities, countries.
  const locations = new Set(
    offers.map((offer) => `${offer.city}, ${offer.country}`)
  );

  return (
    <Container className={styles.ctaContainer}>
      {offers.length && (
        <>
          {/* random 2 offers between 0 and 5 (only 6 first has an image) to show */}
          <OfferCard
            className={styles.offer1}
            offer={offers[Math.floor(Math.random() * 6)]}
            width="324"
            noDescription={true}
          />
          <OfferCard
            className={styles.offer2}
            offer={
              offers.filter((offer) => !offer.favorite)[
                Math.floor(Math.random() * 6)
              ]
            }
            width="194"
            showLike={false}
            cardSize="small"
            outline={true}
            noDescription={true}
          />
        </>
      )}

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
            <li className={cx("active")}>Alugue</li>
            <li>Compre</li>
            <li>Venda</li>
          </ul>
        </div>
        <div className={styles.fields}>
          <div className={styles.fieldContainer}>
            <label htmlFor="">Localização</label>
            <Autocomplete data={[...locations]} />
          </div>
          <div className={styles.fieldContainer}>
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
