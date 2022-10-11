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
let level;
let RESET;

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
  catSpeed = 0d;
  level = 1;
  RESET = false;
}

function draw() {
  frameRate(30);

  let DisM = dist(x, y, catx, caty);
  if (DisM <= d + point / 2) {
    caught = true;
  }
  if (caught == true) {
    setup();
  }
  let DisO = dist(x, y, ostX, ostY);
  if (DisO <= d + point / 2) {
    eaten = true;
  }
  if (eaten == true) {
    eaten = false;
    OST();
    point += 1;
  }
  //finds the distance from player to "cat" and player to "ost" if there's collision it either resets or gives you a point.
  if (level == 1) {
    rect(width / 2 - 50, height / 2 - 30, 100, 60);
    if (keyIsDown(LEFT_ARROW)) {
      level += 1;
      catSpeed = 5;
    }
  }
  // level system, the very amputated menu, wich now is just a rect, takes you to "level 2"
  if (level == 2) {
    background(0, 120, 0);
    fill(255, 255, 0);
    circle(ostX, ostY, d / 2);
    fill(139, 69, 19);
    rect(catx - d / 2, caty - d / 2, d, d, 3);
    if (point >= 20) {
      level += 1;
    }

    if (point >= 10) {
      fill(204, 186, 120);
    } else fill(139, 69, 19);
    ellipse(x, y, d + point, d + point);
    // ellipse(x, y, d, d);
  }
  //changes the color of the player, should be gold, but well... also the player grows every time they eat an "ost"
  if (level == 3) {
    if (RESET == false) {
      catx = random(d, width - d);
      caty = random(d, height - d);
      catSpeed = 5;
      border = 0;
      RESET = true;
    }
    background(0, 0, 255);
    fill(255, 255, 0);
    circle(ostX, ostY, d / 2);
    fill(139, 69, 19);
    rect(catx - d / 2, caty - d / 2, d, d, 3);
    ellipse(x, y, d + point, d + point);
    speed = 8;
  }
  // the last levet. resets the cats position and speed. also increases players speed.

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
    if (y >= 0 + d / 2) {
      y -= speed;
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (y <= height - d / 2) {
      y += speed;
    }
  }
  //detects if player is in the canvas, and then moves the player.
  x += a;
  y += b;
  catx += catA;
  bordercheck();
  console.log(level, point, catSpeed);
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
// bordercheck, takes account to "growth". kinda wobbly
function OST() {
  ostX = random(d, width - d);
  ostY = random(d, height - d);
}
// trying out functions, and making cheese.
