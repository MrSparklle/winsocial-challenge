import React from "react";
import styles from "./Container.module.scss";
import classNames from "classnames/bind";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

// this componente creates a container outside each section. this container define section main properties
const Container = ({ children, ...props }: Props) => {
  const cx = classNames.bind(styles);
  return (
    <section className={cx(styles.container, props.className)}>{children}</section>
  );
};

export default Container;
