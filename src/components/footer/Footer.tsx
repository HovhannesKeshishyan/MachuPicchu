import { FC } from "react";
import styles from "./Footer.module.scss";
import type { SocialMedia } from "@/types/types";

import LinkedinIcon from "@/assets/social-media/linkedin.svg";
import GithubIcon from "@/assets/social-media/github.svg";
import FacebookIcon from "@/assets/social-media/facebook.svg";

const social_medias: SocialMedia[] = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/hovhannes-keshishyan",
    icon: LinkedinIcon,
  },
  {
    name: "Github",
    href: "https://github.com/HovhannesKeshishyan",
    icon: GithubIcon,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/HovoKeshishyan",
    icon: FacebookIcon,
  },
];

const current_year = new Date().getFullYear();

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul>
        {social_medias.map((social_media) => {
          return (
            <li key={social_media.name}>
              <a href={social_media.href} target="_blank">
                <img
                  src={social_media.icon}
                  alt={social_media.name + " icon"}
                />
              </a>
            </li>
          );
        })}

        <li>About</li>
        <li>Contacts</li>
        <li className={styles.heart}>&#10084;</li>
        <li>&#169; {current_year}</li>
      </ul>
    </footer>
  );
};

export default Footer;
