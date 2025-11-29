const frame = document.getElementById("frame");

let currentFrame = 1;
const firstFrame = 1;
const lastFrame = 120;

function updateFrame() {
  frame.src = `frames/Frame${currentFrame}.jpg`;
}

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    currentFrame++;
  } else {
    currentFrame--;
  }

  if (currentFrame > lastFrame) currentFrame = firstFrame;
  if (currentFrame < firstFrame) currentFrame = lastFrame;

  updateFrame();
});

// load initial frame
updateFrame();
