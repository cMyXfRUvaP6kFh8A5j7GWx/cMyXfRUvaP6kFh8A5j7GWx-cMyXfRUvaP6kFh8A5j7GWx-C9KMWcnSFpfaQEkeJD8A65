let video;
function playVideo() {
  alert("اللعنة عليك يا نيغا هههههههههه🤣");

  if (!video) {
    video = document.createElement("iframe");
    video.src = "https://www.youtube.com/embed/lBholeoYGDw?autoplay=1";
    video.allow = "autoplay";
    document.getElementById("videoContainer").appendChild(video);

    const muteButton = document.createElement("button");
    muteButton.innerText = "🔇 Mute Music";
    muteButton.className = "button";
    muteButton.onclick = muteVideo;
    document.getElementById("videoContainer").appendChild(muteButton);
  }
}

function muteVideo() {
  video.src = "";
}

// SNOW ANIMATION
const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
let width, height;
let snowflakes = [];

function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

function createSnowflakes() {
  const count = 100;
  snowflakes = [];
  for (let i = 0; i < count; i++) {
    snowflakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      wind: Math.random() * 1 - 0.5
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
  }
  ctx.fill();
  updateSnowflakes();
}

function updateSnowflakes() {
  for (let flake of snowflakes) {
    flake.y += flake.speed;
    flake.x += flake.wind;
    if (flake.y > height) {
      flake.y = -flake.radius;
      flake.x = Math.random() * width;
    }
  }
}

function animate() {
  drawSnowflakes();
  requestAnimationFrame(animate);
}

createSnowflakes();
animate();
