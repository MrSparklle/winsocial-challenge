import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type: "primary" | "secondary" | "clear"; // type of the button
  active?: boolean; // is active
}

const Button = ({ children, type, active = false, ...props }: Props) => {
  const cx = classNames.bind(styles);

  return (
    <button
      className={cx({ [`btn-${type}`]: true, active: active })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
