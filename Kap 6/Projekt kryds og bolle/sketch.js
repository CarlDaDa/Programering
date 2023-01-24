let p1;
let p2;
let turn;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  bg();
}

function bg() {
  fill(0, 0, 120);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      rect((width / 3) * i, 200 * j, 200, 200);
    }
  }
}
function setPiece() {}
