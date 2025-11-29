const frame = document.getElementById("frame");

let currentFrame = 1;
const firstFrame = 1;
const lastFrame = 120;

function updateFrame() {
  frame.src = `frames/Frame${currentFrame}.jpg`;
}

let scrollDelta = 0;
let animating = false;

window.addEventListener("wheel", (event) => {
  scrollDelta += event.deltaY;
  if (!animating) animateScroll();
});

function animateScroll() {
  animating = true;

  if (scrollDelta > 20) {
    currentFrame++;
    scrollDelta = 0;
  } else if (scrollDelta < -20) {
    currentFrame--;
    scrollDelta = 0;
  }

  if (currentFrame > lastFrame) currentFrame = firstFrame;
  if (currentFrame < firstFrame) currentFrame = lastFrame;

  updateFrame();

  requestAnimationFrame(() => {
    if (Math.abs(scrollDelta) > 1) {
      animateScroll();
    } else {
      animating = false;
    }
  });
}


// load initial frame
updateFrame();
