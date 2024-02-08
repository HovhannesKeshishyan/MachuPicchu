import { FC } from "react";
import styles from "./Main.module.scss";

import { IMAGE_NAMES } from "@/helpers/image-names";
// import imageClick from "./myScript";
const imageClick = () => {
  console.log(888);
};

let images = IMAGE_NAMES.map((name: string) => {
  return `images/${name}`;
});

images = images.concat(images);

images.sort(() => {
  return Math.random() - 0.5;
});

function MainItems() {
  let key = 0;
  return images.map(function (i) {
    key++;
    return (
      <div key={key} className={styles.grid_item}>
        <img
          src={i}
          alt="not found"
          className={styles.hidden}
          onClick={imageClick}
        />
      </div>
    );
  });
}

const Main: FC = () => {
  return (
    <div className={styles.main}>
      <MainItems />
    </div>
  );
};

export default Main;
