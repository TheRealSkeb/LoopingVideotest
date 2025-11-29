const frame = document.getElementById("frame");

// your real first and last frame numbers
let currentFrame = 10;
const firstFrame = 10;
const lastFrame = 129;

function updateFrame() {
  frame.src = `frames/Frame${currentFrame}.jpg`;
}

window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    currentFrame++;
  } else {
    currentFrame--;
  }

  // looping
  if (currentFrame > lastFrame) currentFrame = firstFrame;
  if (currentFrame < firstFrame) currentFrame = lastFrame;

  updateFrame();
});

// load the initial frame
updateFrame();
