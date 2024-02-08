import { FC } from "react";
import styles from "./Footer.module.scss";

const current_year = new Date().getFullYear();

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>About</li>
        <li>Contacts</li>
        <li className={styles.heart}>&#10084;</li>
        <li>&#169; {current_year}</li>
      </ul>
    </footer>
  );
};

export default Footer;
