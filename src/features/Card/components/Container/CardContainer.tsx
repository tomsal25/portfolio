import { ReactNode } from "react";
import styles from "./CardContainer.module.scss";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return <div className={styles.box}>{children}</div>;
};

export default CardContainer;
