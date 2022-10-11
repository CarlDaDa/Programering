let i = 0;
function setup() {
  createCanvas(400, 400);
  // while (i < 100) {
  for (let i = 0; i < 100; i += 2) {
    let x = random(400);
    let y = random(400);
    // let r = random(100);
    // circle(x, y, r);
    fill(255, 0, 0, random(100, 255));
    text(i, x, y);
    //i = i + 1;
  }
  i = 1;
  while (i < 100) {
    fill(0, 0, 255, random(100, 255));
    let x = random(400);
    let y = random(400);

    text(i, x, y);
    i = i + 2;
  }
}
