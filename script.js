const frame = document.getElementById("frame");
const frameCount = 300; // however many JPEGs you have
let currentFrame = 1;

function updateFrame() {
  const padded = String(currentFrame).padStart(4, "0");
  frame.src = `frames/${padded}.jpg`;
}

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    currentFrame++;
  } else {
    currentFrame--;
  }

  if (currentFrame > frameCount) currentFrame = 1;
  if (currentFrame < 1) currentFrame = frameCount;

  updateFrame();
});
