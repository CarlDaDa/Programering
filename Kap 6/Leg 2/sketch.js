let x1 = 100;
let y1 = 500;
let x2 = 300;
let y2 = 100;
let x3 = 500;
let y3 = 500;
let px = 291;
let py = 238;
let pointer;
let nextP;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  frameRate(1);
  background(255);
  strokeWeight(1);
  triangle(x1, y1, x2, y2, x3, y3);
  strokeWeight(3);
  point(px, py);
  pointer = nextP;
  //nextP = int(random(1, 4));
  pointer = 3;
  new print(px, py, pointer);
  newPoint();
}
function newPoint() {
  if (pointer == 1) {
    strokeWeight(1);
    line(px, py, x1, y1);
    strokeWeight(3);
    px = x1 + px / 2;
    py = y1 + py / 2;
  } else if (pointer == 2) {
    strokeWeight(1);
    line(px, py, x2, y2);
    strokeWeight(3);
    px = x2 - px / 2;
    py = y2 - py / 2;
  } else if (pointer == 3) {
    strokeWeight(1);
    line(px, py, x3, y3);
    strokeWeight(3);
    px = 300 + px / 2;
    py = y3 - py / 2;
  }
}
