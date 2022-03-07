import React from "react";
import styles from "./Newsletter.module.scss";
import { Button, Container } from "components";

const Newsletter = () => {
  return (
    <Container className={styles.newsletterContainer}>
      <h3>Sem Spam</h3>
      <h2>É um proprietário?</h2>
      <p>
        Descubra formas de aumentar o valor da sua casa e de ser listado. Sem
        Spam.
      </p>
      <div className={styles.formBox}>
        <input type="email" placeholder="Entre com o seu e-mail" />
        <Button type="primary">Enviar</Button>
      </div>
      <span>
        Junte-se a mais de <strong>10,000</strong> outros proprietários na nossa
        comunidade de estaleiros.
      </span>
    </Container>
  );
};

export default Newsletter;
