import React from "react";
import classNames from "classnames/bind";
import styles from "./OfferCard.module.scss";
import { ReactComponent as Heart } from "../../../assets/hearth.svg";
import { ReactComponent as BedIcon } from "../../../assets/bed-icon.svg";
import { ReactComponent as BathIcon } from "../../../assets/bath-icon.svg";
import { ReactComponent as SizeIcon } from "../../../assets/size-icon.svg";
import { ReactComponent as FavoriteIcon } from "../../../assets/favorite-icon.svg";
import { Address } from "models";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  offer: Address;
  width: string;
  showLike?: boolean;
  cardSize?: "small";
  noDescription?: boolean;
  outline?: boolean;
}

const OfferCard = ({
  offer,
  width,
  showLike = true,
  cardSize,
  noDescription = false,
  outline = false,
  ...props
}: Props) => {
  const cx = classNames.bind(styles);

  const {
    id,
    favorite,
    size,
    bathroom,
    beds,
    rental,
    city,
    country,
    state,
    avatar,
  } = offer;

  return (
    <div
      className={cx(
        styles.offersCardContainer,
        { outline: outline },
        props.className
      )}
      style={{
        ["--width" as string]: `${width}px`,
      }}
    >
      {favorite && (
        <div className={styles.popular}>
          <FavoriteIcon />
          POPULAR
        </div>
      )}
      <img
        className={cx(styles.imageContainer, cardSize)}
        src={avatar && require(`../../../assets/offers/${avatar}`)}
        alt={city}
      />
      <div className={cx(styles.titleContainer, cardSize)}>
        <div>
          <span>R$ {rental.toFixed(2)}</span>
          <p>/mês</p>
          <h4>{city}</h4>
        </div>
        {showLike && <Heart />}
      </div>
      <div className={cx(styles.addressContainer, cardSize)}>
        {state}, {country}
      </div>
      <div className={cx(styles.descriptionContainer, cardSize)}>
        <div>
          <BedIcon />
          <span>
            {beds}
            {!noDescription && " Cama"}
            {!noDescription && beds > 1 && "s"}
          </span>
        </div>
        <div>
          <BathIcon />
          <span>
            {bathroom}
            {!noDescription && " Banheiro"}
            {!noDescription && bathroom > 1 && "s"}
          </span>
        </div>
        <div>
          <SizeIcon />
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
