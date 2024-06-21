let cols = 10; // Number of columns in the grid
let rows = 10; // Number of rows in the grid
let cellWidth;
let cellHeight;
let delay = 100; // Adjust this value to change the speed (in milliseconds)
let linesToDraw = []; // Array to store lines to draw
let currentLineIndex = 0; // Index of the current line being drawn

function setup() {
  createCanvas(600, 600);
  cellWidth = width / cols;
  cellHeight = height / rows;
  stroke(color('green'));
  generateLines();
  drawGrid();
  drawDiagonalLines();
  animateLines();
}

function draw() {
  // No need for draw loop in this setup
}

function generateLines() {
  let midX = width / 2;
  let midY = height / 2;

  // Generate lines in the top-left quadrant
  for (let y = 0; y < midY; y += cellHeight) {
    for (let x = 0; x < midX; x += cellWidth) {
      linesToDraw.push({ x: x + cellWidth / 2, y: y + cellHeight / 2 });
    }
  }
}

function drawGrid() {
  for (let i = 0; i <= cols; i++) {
    line(i * cellWidth, 0, i * cellWidth, height);
  }
  for (let j = 0; j <= rows; j++) {
    line(0, j * cellHeight, width, j * cellHeight);
  }
}

function drawDiagonalLines() {
  // Diagonal line from top-left to bottom-right
  line(0, 0, width, height);

  // Diagonal line from top-right to bottom-left
  line(width, 0, 0, height);
}

function animateLines() {
  if (currentLineIndex < linesToDraw.length) {
    let line = linesToDraw[currentLineIndex];
    drawRandomLine(line.x, line.y);
    currentLineIndex++;
    setTimeout(animateLines, delay);
  }
}

function drawRandomLine(x, y) {
  let dice = floor(random(1, 7)); // Roll a dice (1 to 6)
  let centerX = x;
  let centerY = y;

  strokeWeight(2);

  switch (dice) {
    case 1:
      // Line from bottom-left to top-right
      line(centerX - cellWidth / 2, y + cellHeight, centerX + cellWidth / 2, y);
      mirrorLine(centerX - cellWidth / 2, y + cellHeight, centerX + cellWidth / 2, y); // Mirror across the diagonal
      break;
    case 2:
      // Line from bottom-right to top-left
      line(centerX + cellWidth / 2, y + cellHeight, centerX - cellWidth / 2, y);
      mirrorLine(centerX + cellWidth / 2, y + cellHeight, centerX - cellWidth / 2, y); // Mirror across the diagonal
      break;
    case 3:
      // Line from top-left to bottom-right
      line(centerX - cellWidth / 2, y, centerX + cellWidth / 2, y + cellHeight);
      mirrorLine(centerX - cellWidth / 2, y, centerX + cellWidth / 2, y + cellHeight); // Mirror across the diagonal
      break;
    case 4:
      // Line from top-right to bottom-left
      line(centerX + cellWidth / 2, y, centerX - cellWidth / 2, y + cellHeight);
      mirrorLine(centerX + cellWidth / 2, y, centerX - cellWidth / 2, y + cellHeight); // Mirror across the diagonal
      break;
    case 5:
      // Vertical line from top to bottom
      line(centerX, y, centerX, y + cellHeight);
      mirrorLine(centerX, y, centerX, y + cellHeight); // Mirror vertically across the diagonal
      break;
    case 6:
      // Horizontal line from left to right
      line(centerX - cellWidth / 2, centerY, centerX + cellWidth / 2, centerY);
      mirrorLine(centerX - cellWidth / 2, centerY, centerX + cellWidth / 2, centerY); // Mirror horizontally across the diagonal
      break;
  }
}

function mirrorLine(x1, y1, x2, y2) {
  // Mirroring across the diagonal lines
  let mirrorX1 = width - x1;
  let mirrorY1 = height - y1;
  let mirrorX2 = width - x2;
  let mirrorY2 = height - y2;

  line(mirrorX1, mirrorY1, mirrorX2, mirrorY2);
}