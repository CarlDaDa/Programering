function setup() {
  createCanvas(400, 400);
  let r = random(10, 200);
  background(220);
  fill(100);
  // rect(100, 100, 2 * r, r);

  line(200, 100, 200 + r, 200);
  line(200, 100, 200 - r, 200);
  line(200 - r, 200, 200, 300);
  line(200 + r, 200, 200, 300);
}

function draw() {}
