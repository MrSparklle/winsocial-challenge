import React from "react";
import styles from "./Offers.module.scss";
import { Button, Container, OfferCard } from "components";

const Offers = () => {
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
        <OfferCard
          title="teste"
          price={10}
          address="teste"
          beds={2}
          bathrooms={1}
          dimensions="12 x 15"
          imageSrc="1.png"
          width="352"
          className={styles.offerItem}
        />
        <OfferCard
          title="teste"
          price={10}
          address="teste"
          beds={2}
          bathrooms={1}
          dimensions="12 x 15"
          imageSrc="2.png"
          width="352"
          className={styles.offerItem}
        />
        <OfferCard
          title="teste"
          price={10}
          address="teste"
          beds={2}
          bathrooms={1}
          dimensions="12 x 15"
          imageSrc="3.png"
          width="352"
          className={styles.offerItem}
        />
        <OfferCard
          title="teste"
          price={10}
          address="teste"
          beds={2}
          bathrooms={1}
          dimensions="12 x 15"
          imageSrc="4.png"
          width="352"
          className={styles.offerItem}
        />
        <OfferCard
          title="teste"
          price={10}
          address="teste"
          beds={2}
          bathrooms={1}
          dimensions="12 x 15"
          imageSrc="5.png"
          width="352"
          className={styles.offerItem}
        />
        <OfferCard
          title="teste"
          price={10}
          address="teste"
          beds={2}
          bathrooms={1}
          dimensions="12 x 15"
          imageSrc="6.png"
          width="352"
          className={styles.offerItem}
        />
      </div>
    </Container>
  );
};

export default Offers;
