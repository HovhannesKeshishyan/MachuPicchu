let clickCount = 0;
let clickedImages = [];
let findedImages = 0;

function imageClick(event) {
  if (clickCount === 2) {
    return;
  }
  if (event.target.status === "show") {
    return;
  } else {
    event.target.classList.add("show");
    event.target.status = "show";
    clickCount++;
    clickedImages.push(event.target);
    if (clickCount === 2) {
      checkImages();
    }
  }
}

function checkImages() {
  if (clickedImages[0].src === clickedImages[1].src) {
    findedImages += 2;
    clickedImages = [];
    clickCount = 0;
    if (findedImages === 30) {
      setTimeout(() => {
        alert("You win");
      }, 500);
    }
  } else {
    setTimeout(() => {
      clickedImages[0].classList.remove("show");
      clickedImages[1].classList.remove("show");
      clickedImages[0].status = "";
      clickedImages[1].status = "";
      clickedImages = [];
      clickCount = 0;
    }, 500);
  }
}

export default imageClick;
