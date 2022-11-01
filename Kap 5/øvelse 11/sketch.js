let x = 0;
let y = 0;
let fyld = true;
function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < 8; i++) {
    x = 0;
    if (fyld == true) {
      fill(0);
      fyld = false;
    } else {
      fill(255);
      fyld = true;
    }
    for (let j = 0; j < 8; j++) {
      rect(x, y, 100, 100);
      if (fyld == true) {
        fill(0);
        fyld = false;
      } else {
        fill(255);
        fyld = true;
      }

      x += 100;
      print(y);
    }
    y += 100;
    //rect(x, y, 100, 100);
  }
}
