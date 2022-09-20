let a;
let b;
let x;
let y;
let d = 20;
let speed = 5;
let catx;
let caty;
let catA;
let border;
let caught;
let multip;
let ostX;
let ostY;
let eaten;
let point;

function setup() {
  createCanvas(640, 360);
  x = random(d, width - d);
  y = random(d, height - d);
  catx = random(d, width - d);
  caty = random(d, height - d);
  a = 0;
  b = 0;
  catA = 5;
  border = 0;
  caught = false;
  multip = 0.3;
  OST();
  eaten = false;
  point = 0;
}

function draw() {
  frameRate(30);
  background(220);

  let DisM = dist(x, y, catx, caty);
  if (DisM <= d) {
    caught = true;
  }
  if (caught == true) {
    setup();
  }
  let DisO = dist(x, y, ostX, ostY);
  if (DisO <= d) {
    eaten = true;
  }
  if (eaten == true) {
    eaten = false;
    OST();
    point += 1;
  }

  fill(255, 255, 0);
  circle(ostX, ostY, d / 2);
  fill(139, 69, 19);
  ellipse(x, y, d, d);
  rect(catx - d / 2, caty - d / 2, d, d, 3);
  strokeWeight(1);

  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += speed;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= speed;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += speed;
  }

  x += a;
  y += b;
  catx += catA;
  bordercheck();
  console.log(point);
}
function bordercheck() {
  if (catx + d / 2 >= width) {
    border += 1;
    catA = border * multip * -speed;
  }
  if (catx - d / 2 <= 0) {
    border += 1;
    catA = border * multip * speed;
  }
}
function OST() {
  ostX = random(d, width - d);
  ostY = random(d, height - d);
}
