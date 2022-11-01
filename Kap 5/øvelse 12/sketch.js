function setup() {
  createCanvas(600, 600);
  background(0, 100, 150);
  strokeWeight(10);
  line(width / 2, 50, width / 2, height - 50);
  for (let i = 0; i < 10; i++) {
    line(200, 50 * i + 75, width - 200, 50 * i + 75);
    20;
  }
}
