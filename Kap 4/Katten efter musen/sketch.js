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
let catSpeed;

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
  catSpeed = 5;
}

function draw() {
  frameRate(30);
  background(0, 120, 0);

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
  rect(catx - d / 2, caty - d / 2, d, d, 3);
  if (point >= 10) {
    fill(204, 186, 120);
  } else fill(139, 69, 19);
  ellipse(x, y, d + point, d + point);
  ellipse(x, y, d, d);

  strokeWeight(1);

  if (keyIsDown(LEFT_ARROW)) {
    if (x > 0 + d / 2) {
      x -= speed;
    }
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if (x < width - d / 2) {
      x += speed;
    }
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
  console.log(catSpeed);
}
function bordercheck() {
  if (catx + d / 2 >= width) {
    border += 1;
    //catA = border * multip * -speed;
    if (catSpeed <= 20) {
      catA = multip * -border + -catSpeed;
      catSpeed += multip * border;
    } else {
      catA = -catSpeed;
    }
  }
  if (catx - d / 2 <= 0) {
    border += 1;
    //  catA = border * multip * speed;
    if (catSpeed <= 20) {
      catA = multip * border + catSpeed;
      catSpeed += multip * border;
    } else {
      catA = catSpeed;
    }
  }
}
function OST() {
  ostX = random(d, width - d);
  ostY = random(d, height - d);
}
