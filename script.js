const totalFrames = 120;
let currentFrame = 1;

// Preload frames
let frames = [];
for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    img.src = `frames/Frame${i}.jpg`; // <- path fixed!
    frames.push(img);
}

const imgEl = document.getElementById('video-frame');

function showFrame(frame) {
    imgEl.src = frames[frame - 1].src;
}

// Scroll one frame per tick
window.addEventListener('wheel', (e) => {
    e.preventDefault(); // prevent default scroll

    if (e.deltaY > 0) {
        currentFrame++;
        if (currentFrame > totalFrames) currentFrame = 1;
    } else {
        currentFrame--;
        if (currentFrame < 1) currentFrame = totalFrames;
    }

    showFrame(currentFrame);
}, { passive: false });
