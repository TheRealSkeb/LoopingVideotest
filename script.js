const frame = document.getElementById("frame");

const firstFrame = 1;
const lastFrame = 120;
let currentFrame = 1;

// momentum values
let velocity = 0;
let isAnimating = false;

// preload all images
const images = [];
for (let i = firstFrame; i <= lastFrame; i++) {
  const img = new Image();
  img.src = `frames/Frame${i}.jpg`;
  images.push(img);
}

function updateFrame() {
  frame.src = `frames/Frame${currentFrame}.jpg`;
}

function animate() {
  if (Math.abs(velocity) < 0.01) {
    velocity = 0;
    isAnimating = false;
    return;
  }

  currentFrame += velocity;

  // wrap around loop
  if (currentFrame > lastFrame) currentFrame = firstFrame;
  if (currentFrame < firstFrame) currentFrame = lastFrame;

  updateFrame();

  // friction for momentum fade-out
  velocity *= 0.92;

  requestAnimationFrame(animate);
}

window.addEventListener("wheel", (event) => {
  // scroll speed factor, tweak to taste
  const scrollForce = event.deltaY * 0.02;

  velocity += scrollForce;

  if (!isAnimating) {
    isAnimating = true;
    requestAnimationFrame(animate);
  }
});
