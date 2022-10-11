let r = 300;
let i = 0;

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < 30; i++) {
    // r -= i;
    circle(200, height / 2, r - 10 * i);
    fill(random(255), random(255), random(255));
    print(r);
  }

  while (i < 30) {
    circle(600, height / 2, r - 10 * i);
    fill(random(255), random(255), random(255));
    i++;
  }
}

function draw() {
  //background(220);
}
