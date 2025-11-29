const totalFrames = 120;
let currentFrame = 1;
let velocity = 0;

// Preload frames
let frames = [];
for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    img.src = `frames/Frame${i}.jpg`;
    frames.push(img);
}

const imgEl = document.getElementById('video-frame');

function showFrame(frame) {
    imgEl.src = frames[frame - 1].src;
}

// Handle scroll: add to velocity instead of instantly changing frame
window.addEventListener('wheel', (e) => {
    e.preventDefault();
    velocity += e.deltaY > 0 ? 1 : -1; // increase or decrease velocity
}, { passive: false });

// Animation loop for momentum
function animate() {
    if (Math.abs(velocity) > 0.01) { // only move if velocity is noticeable
        currentFrame += velocity;

        // Loop frames
        if (currentFrame > totalFrames) currentFrame -= totalFrames;
        if (currentFrame < 1) currentFrame += totalFrames;

        showFrame(Math.round(currentFrame));

        // Apply damping for momentum
        velocity *= 0.85; // tweak for faster/slower slowdown
    }

    requestAnimationFrame(animate);
}

animate();
