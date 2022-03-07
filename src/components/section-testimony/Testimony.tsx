import React, { useState } from "react";
import styles from "./Testimony.module.scss";
import { Container } from "components";
import { Testimony as ITestimony } from "models";

interface Props {
  testimonies: ITestimony[];
}

const Testimony = ({ testimonies }: Props) => {
  const [currentTestimony, setCurrentTestimony] = useState<ITestimony>(
    testimonies[0]
  );

  return (
    <Container className={styles.testymonyContainer}>
      <h2>Depoimentos</h2>
      <p>
        Veja o que os nossos administradores de imóveis, proprietários e
        inquilinos têm a dizer
      </p>
      <h4>“{currentTestimony.text}”</h4>
      <span>
        <strong>{currentTestimony.author},</strong> {currentTestimony.type}
      </span>
      <div className={styles.persons}>
        {testimonies.length &&
          testimonies.map((testimony) => (
            <img
              key={testimony.id}
              onClick={() => setCurrentTestimony(testimony)}
              src={
                testimony.avatar && require(`../../assets/${testimony.avatar}`)
              }
              alt={testimony.author}
            />
          ))}

        {/* <MiraCulos /> */}
        {/* <RobertoSa /> */}
      </div>
    </Container>
  );
};

export default Testimony;
