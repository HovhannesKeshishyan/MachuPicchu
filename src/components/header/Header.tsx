import { FC } from "react";
import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h1>Match The Picture</h1>
    </header>
  );
};

export default Header;
