import React from "react";
import classNames from "classnames/bind";
import styles from "./OfferCard.module.scss";
import { ReactComponent as Heart } from "../../../assets/hearth.svg";
import { ReactComponent as BedIcon } from "../../../assets/bed-icon.svg";
import { ReactComponent as BathIcon } from "../../../assets/bath-icon.svg";
import { ReactComponent as SizeIcon } from "../../../assets/size-icon.svg";
import { ReactComponent as FavoriteIcon } from "../../../assets/favorite-icon.svg";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  price: number;
  address: string;
  beds: number;
  bathrooms: number;
  dimensions: string;
  imageSrc: string;
  width: string;
  showLike?: boolean;
  cardSize?: "small";
  noDescription?: boolean;
  outline?: boolean;
  popular?: boolean;
}

const OfferCard = ({
  title,
  price,
  address,
  beds,
  bathrooms,
  dimensions,
  imageSrc,
  width,
  showLike = true,
  cardSize,
  noDescription = false,
  outline = false,
  popular = false,
  ...props
}: Props) => {
  const cx = classNames.bind(styles);

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
      {popular && (
        <div className={styles.popular}>
          <FavoriteIcon />
          POPULAR
        </div>
      )}
      <img
        className={cx(styles.imageContainer, cardSize)}
        src={require(`../../../assets/offers/${imageSrc}`)}
        alt={title}
      />
      <div className={cx(styles.titleContainer, cardSize)}>
        <div>
          <span>R$ {price.toFixed(2)}</span>
          <p>/mês</p>
          <h4>{title}</h4>
        </div>
        {showLike && <Heart />}
      </div>
      <div className={cx(styles.addressContainer, cardSize)}>{address}</div>
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
            {bathrooms}
            {!noDescription && " Banheiro"}
            {!noDescription && bathrooms > 1 && "s"}
          </span>
        </div>
        <div>
          <SizeIcon />
          <span>{dimensions} m²</span>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
