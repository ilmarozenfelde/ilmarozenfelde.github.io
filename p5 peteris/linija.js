let cols = 10; // Number of columns in the grid
let rows = 10; // Number of rows in the grid
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(600, 600);
  cellWidth = width / cols;
  cellHeight = height / rows;
  noLoop(); // Draw once and stop
}

function draw() {
  background(255);
  stroke(color ('green'));

  // Draw the grid
  for (let i = 0; i <= cols; i++) {
    line(i * cellWidth, 0, i * cellWidth, height);
  }
  for (let j = 0; j <= rows; j++) {
    line(0, j * cellHeight, width, j * cellHeight);
  }

  // Draw center line
  let centerY = height / 2;
  line(0, centerY, width, centerY);

  // Draw from top center to center
  drawFromTopToCenter();

  // Mirror vertically from center to bottom
  drawFromCenterToBottom();
}

function drawFromTopToCenter() {
  let centerX = width / 2;
  let y = 0;
  let midY = height / 2;

  while (y < midY) {
    drawRandomLine(centerX, y);
    y += cellHeight;
  }
}

function drawFromCenterToBottom() {
  let centerX = width / 2;
  let y = height / 2 + cellHeight; // Start just below the center
  let endY = height;

  while (y < endY) {
    drawRandomLine(centerX, y);
    y += cellHeight;
  }
}

function drawRandomLine(x, y) {
  let dice = floor(random(1, 7)); // Roll a dice (1 to 6)
  let centerX = x;
  let centerY = y + cellHeight / 2;

  strokeWeight(2);

  switch (dice) {
    case 1:
      // Line from bottom to top
      line(centerX, y + cellHeight, centerX, y);
      break;
    case 2:
      // Line from section intersection to the right side
      line(centerX, centerY, width - centerX, centerY);
      break;
    case 3:
      // Line from section intersection to the left side
      line(centerX, centerY, centerX, centerY);
      break;
    case 4:
      // Line from top to bottom
      line(centerX, y, centerX, y + cellHeight);
      break;
    case 5:
      // Diagonally to the right (top-left to bottom-right)
      line(centerX - cellWidth / 2, y, centerX + cellWidth / 2, y + cellHeight);
      break;
    case 6:
      // Diagonally to the left (top-right to bottom-left)
      line(centerX + cellWidth / 2, y, centerX - cellWidth / 2, y + cellHeight);
      break;
  }

  // Mirror the line in the lower part of the grid
  let mirrorY = height - y - cellHeight; // Calculate y-coordinate for mirror reflection

  switch (dice) {
    case 1:
      // Line from bottom to top
      line(centerX, mirrorY, centerX, mirrorY + cellHeight);
      break;
    case 2:
      // Line from section intersection to the right side
      line(centerX, height - centerY, width - centerX, height - centerY);
      break;
    case 3:
      // Line from section intersection to the left side
      line(centerX, height - centerY, centerX, height - centerY);
      break;
    case 4:
      // Line from top to bottom
      line(centerX, mirrorY + cellHeight, centerX, mirrorY);
      break;
    case 5:
      // Diagonally to the right (top-left to bottom-right)
      line(centerX - cellWidth / 2, mirrorY + cellHeight, centerX + cellWidth / 2, mirrorY);
      break;
    case 6:
      // Diagonally to the left (top-right to bottom-left)
      line(centerX + cellWidth / 2, mirrorY + cellHeight, centerX - cellWidth / 2, mirrorY);
      break;
  }
}