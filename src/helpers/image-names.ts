import type { ImageNames, ImageState } from "@/types/types";

//all images
const IMAGE_NAMES: ImageNames = [
  "car.png",
  "elephant.png",
  "flag.png",
  "gold-fish.png",
  "minion.png",
  "ninja.png",
  "palm.png",
  "panda.png",
  "shark.png",
  "ship.png",
  "tomato.png",
  "thread.png",
  "truck.png",
  "whell.png",
  "white-blue-fish.png",
];

const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const getRandomImages = (count = 15) => {
  //get copy
  const arr = [...IMAGE_NAMES];
  //shuffle
  const shuffled = shuffleArray(arr);
  //get random items
  let slice = shuffled.slice(0, count);
  //duplicate items
  slice = [...slice, ...slice];
  //shuffle duplicates
  return shuffleArray(slice);
};

export const getCurrentImages = () => {
  const random_images = getRandomImages();
  return random_images.map((image_name, index): ImageState => {
    return {
      id: index,
      name: image_name,
      path: `images/${image_name}`,
      is_open: false,
    };
  });
};
