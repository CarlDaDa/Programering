let grafX = 300;
let grafY = 300;
let b = 10;
let a = 1;
function setup() {
  createCanvas(600, 600);
  //background(220);
  for (let i = 0; i < 20; i++) {
    line((i * width) / 20, 0, (i * width) / 20, height);
  }
  for (let i = 0; i < 20; i++) {
    line(0, (i * height) / 20, width, (i * height) / 20);
  }
  strokeWeight(5);
  line(0, 300, 600, 300);
  line(300, 0, 300, 600);
}

function draw() {
  for (let i = 0; i < width; i++) {
    point(i, -i * a + 600 - b);
  }
}
