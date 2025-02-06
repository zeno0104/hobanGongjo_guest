import React from "react";
import "./Button.css";

type Props = {
  text: string;
  type: string;
};
export const Button = ({ text, type }: Props) => {
  return <button className={`btn btn_${type}`}>{text}</button>;
};
