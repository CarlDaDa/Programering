function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), random(5, 100), random(5, 100));
  }
  let i = 0;

  while (i < 5) {
    fill(random(255), random(255), random(255));
    ellipse(random(width), random(height), random(5, 100), random(5, 100));

    i++;
  }
}

function draw() {
  // background(220);
}
