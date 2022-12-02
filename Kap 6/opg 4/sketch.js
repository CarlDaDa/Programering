let x1, y1, r1;
function setup() {
  createCanvas(400, 400);
  background(120);
  x1 = random(400);
  y1 = random(400);
  r1 = random(200);

  //greet();
}

function greet() {}
function draw() {
  if (dist(x1, y1, mouseX, mouseY) < r1 / 2) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  circle(x1, y1, r1);

  print(mouseX, mouseY);
}
