import React from "react";
import styles from "./styles.module.css";
import Chartist from "./chartist/chartist";
import AllButtons from "./reactstrap/buttons";

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Hello Irfan: {text}</div>;
};

export const Chart = () => {
  return <Chartist />;
};

export const Buttons = () => {
  return <AllButtons />;
};
