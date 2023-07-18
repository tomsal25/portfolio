import { ReactNode } from "react";
import Header from "../Header/Header";
import styles from "./MainLayout.module.scss";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <div className={styles.box}>{children}</div>
    </>
  );
};

export default MainLayout;
