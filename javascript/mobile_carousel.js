var carousel = document.querySelector('.carousel_m');
var cells = carousel.querySelectorAll('.carousel__cell');
var cellCount = 8; // fixed number of cells
var selectedIndex = 0;
var rotateFn = 'rotateX';
var cellHeight = carousel.offsetHeight;
var theta = 360 / cellCount;
var radius = Math.round((cellHeight / 2) / Math.tan(Math.PI / cellCount));
var autoScrollTimer; // store the timer ID
var autoScrollDelay = 6000; // 6 seconds

// Position cells in a vertical circle
for (var i = 0; i < cells.length; i++) {
  var cell = cells[i];
  var cellAngle = theta * i;
  cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
}

function rotateCarousel() {
  var angle = theta * selectedIndex * -1;
  carousel.style.transform = 'translateZ(' + (-radius) + 'px) ' + rotateFn + '(' + angle + 'deg)';
}

function startAutoScroll() {
  clearInterval(autoScrollTimer); // stop old timer
  autoScrollTimer = setInterval(function () {
    selectedIndex--;
    rotateCarousel();
  }, autoScrollDelay);
}

// Button controls
document.querySelector('.previous-button').addEventListener('click', function () {
  selectedIndex--;
  rotateCarousel();
  startAutoScroll(); // reset timer
});

document.querySelector('.next-button').addEventListener('click', function () {
  selectedIndex++;
  rotateCarousel();
  startAutoScroll(); // reset timer
});

// Start auto-scrolling initially
startAutoScroll();
rotateCarousel();

function adjustSceneHeight() {
  const scene = document.querySelector('.scene');
  const cells = document.querySelectorAll('.carousel__cell');
  
  let maxHeight = 0;
  
  cells.forEach(cell => {
    // Use scrollHeight to get full height including overflow
    const cellHeight = cell.scrollHeight;
    if (cellHeight > maxHeight) maxHeight = cellHeight;
  });
  
  // Add a little padding if needed
  const padding = 20;
  scene.style.height = (maxHeight + padding) + 'px';
}

window.addEventListener('load', adjustSceneHeight);
window.addEventListener('resize', adjustSceneHeight);