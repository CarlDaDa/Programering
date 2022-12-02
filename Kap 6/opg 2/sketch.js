let x1, y1, r1;
let x2, y2, r2;
function setup() {
  createCanvas(400, 400);
  background(120);
  x1 = random(400);
  y1 = random(400);
  x2 = random(400);
  y2 = random(400);
  r1 = random(200);
  r2 = random(200);
  greet();
}

function greet() {
  if (dist(x1, y1, x2, y2) < r1 / 2 + r2 / 2) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  circle(x1, y1, r1);
  circle(x2, y2, r2);
}
