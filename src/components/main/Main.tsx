import { FC, useState } from "react";
import styles from "./Main.module.scss";

import type { ImageState, OpenedImages } from "@/types/types";
import { getCurrentImages } from "@/helpers/image-names";
import { WinnerModal } from "../modals/WinnerModal";

const CURRENT_GAME_IMAGES = getCurrentImages();

const Main: FC = () => {
  const [currentGameImages, setCurrentGameImages] =
    useState(CURRENT_GAME_IMAGES);
  const [firstImage, setFirstImage] = useState<ImageState | null>(null);
  const [findedImages, setFindedImages] = useState<number[]>([]);
  const [openedImages, setOpenedImages] = useState<OpenedImages>({});
  const [attempths, setAttempths] = useState(0);
  const [clickDisabled, setClickDisabled] = useState(false);

  const winner = findedImages.length === CURRENT_GAME_IMAGES.length;

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

  const restartGame = () => {
    setCurrentGameImages(getCurrentImages());
    setFirstImage(null);
    setFindedImages([]);
    setOpenedImages({});
    setAttempths(0);
    setClickDisabled(false);
  };

  const main_class_name = clickDisabled
    ? `${styles.main} ${styles.main_click_disabled}`
    : styles.main;
  return (
    <>
      {winner && (
        <WinnerModal
          message={`You find all pictures after ${attempths} attempths`}
          hide_cancel_btn
          onConfirm={restartGame}
          ok_btn_text="Play again?"
        />
      )}

      <main className={main_class_name}>
        {currentGameImages.map((image) => {
          const class_name = openedImages[image.id]
            ? `${styles.grid_item} ${styles.show}`
            : styles.grid_item;
          return (
            <div
              onClick={() => handleClick(image)}
              className={class_name}
              key={image.id}
            >
              <div className={styles.image_shape}>?</div>
              <img src={image.path} alt={image.name} />
            </div>
          );
        })}
      </main>
    </>
  );
};

export default Main;
