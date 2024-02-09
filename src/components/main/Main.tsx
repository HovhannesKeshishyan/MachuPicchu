import { FC, useState } from "react";
import styles from "./Main.module.scss";

import type { ImageState, OpenedImages } from "@/types/types";
import { IMAGE_NAMES } from "@/helpers/image-names";

//dublicate and shuffle
const image_names = [...IMAGE_NAMES, ...IMAGE_NAMES].sort(() => {
  return Math.random() - 0.5;
});

const images: ImageState[] = image_names.map(
  (image_name, index): ImageState => {
    return {
      id: index,
      name: image_name,
      path: `images/${image_name}`,
      is_open: false,
    };
  }
);

const Main: FC = () => {
  const [firstImage, setFirstImage] = useState<ImageState | null>(null);
  const [findedImages, setFindedImages] = useState<number[]>([]);
  const [openedImages, setOpenedImages] = useState<OpenedImages>({});
  const [attempths, setAttempths] = useState(0);
  const [clickDisabled, setClickDisabled] = useState(false);

  const handleClick = (clicked_image: ImageState) => {
    const { id, name } = clicked_image;
    //Skip if the image is already open
    if (clickDisabled || openedImages[id]) return;

    //Open clicked image
    setOpenedImages((prev_state) => {
      return { ...prev_state, [id]: true };
    });

    if (!firstImage) {
      setFirstImage(clicked_image);
      return;
    }

    setAttempths((prev) => prev + 1);

    if (firstImage.name === name) {
      setFirstImage(null);
      setFindedImages((prev_state) => [...prev_state, firstImage.id, id]);
      return;
    }

    setClickDisabled(true);
    setTimeout(() => {
      setOpenedImages((prev_state) => {
        return { ...prev_state, [firstImage.id]: false, [id]: false };
      });
      setFirstImage(null);
      setClickDisabled(false);
    }, 1500);
  };

  const main_class_name = clickDisabled
    ? `${styles.main} ${styles.main_click_disabled}`
    : styles.main;
  return (
    <>
      <div className={main_class_name}>
        {images.map(function (image) {
          const class_name = openedImages[image.id]
            ? `${styles.hidden} ${styles.show}`
            : styles.hidden;
          return (
            <div key={image.id} className={styles.grid_item}>
              <img
                src={image.path}
                alt={image.name}
                className={class_name}
                onClick={() => handleClick(image)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Main;
