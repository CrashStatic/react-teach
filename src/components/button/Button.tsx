import React from "react";
import classes from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export default function Button({children, isActive, ...props}: ButtonProps) {
  return (
    <button
      {...props}
      className={isActive ? `${classes.button} ${classes.active}` : classes.button}
    >
      {children}
    </button>
  )
}
