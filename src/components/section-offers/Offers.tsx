import React from "react";
import styles from "./Offers.module.scss";
import { Button, Container, OfferCard } from "components";
import { Address } from "models";

interface Props {
  offers: Address[];
}

const Offers = ({ offers }: Props) => {
  return (
    <Container className={styles.offersContainer}>
      <div className={styles.titleContainer}>
        <div>
          <h2>Com base na sua localização</h2>
          <p>
            Algumas das nossas propriedades escolhidas perto da sua localização.
          </p>
        </div>
        <Button type="primary">Pesquisar mais propriedades</Button>
      </div>
      <div className={styles.offersListContainer}>
        {offers.length &&
          offers
            .slice(0, 6)
            .map((offer) => (
              <OfferCard
                key={offer.id}
                offer={offer}
                width="352"
                className={styles.offerItem}
              />
            ))}
      </div>
    </Container>
  );
};

export default Offers;
