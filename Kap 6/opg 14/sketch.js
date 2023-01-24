let c9;
let x;
let y;
let etager;
let roof;
let maling;
let romal;
let plac;
let et2;
let et3;
let et4;
let længde;
let position;
let højde;
let leavesAmount;
let img;

function setup() {
  img = loadImage(
    "/Users/christiandam/Desktop/2.G/Programering/Kap 6/opg 14/bg.jpeg"
  );
  createCanvas(600, 600);
  etager = createSlider(1, 4, 3, 1);
  etager.position(10, 10);
  etager.style("width", "200px");

  roof = createSlider(1, 4, 3, 1);
  roof.position(10, 30);
  roof.style("width", "200px");

  maling = createSlider(0, 360, 60, 40);
  maling.position(10, 50);
  maling.style("width", "200px");

  romal = createSlider(0, 360, 60, 40);
  romal.position(10, 70);
  romal.style("width", "200px");

  plac = createSlider(1, 400, 50, 1);
  plac.position(10, 90);
  plac.style("width", "200px");

  createElement("h4", "hvor mange etager?").position(220, -10);

  Ran();
  længde = createSlider(1, 10, 3, 1);
  længde.position(380, 10);
  længde.style("width", "200px");

  position = createSlider(50, 550, 50, 1);
  position.position(380, 30);
  position.style("width", "200px");

  højde = createSlider(50, 450, 50, 1);
  højde.position(380, 50);
  højde.style("width", "200px");

  leavesAmount = createSlider(1, 6, 3, 1);
  leavesAmount.position(380, 70);
  leavesAmount.style("width", "200px");
}

function draw() {
  strokeWeight(0);
  background(0, 20, 200);
  image(img, 0, 0);
  print(x, y);
  x += 4;
  cloud();
  if (x > 650) {
    x = -10;
    y = random(30, 200);
  }
  let etagval = etager.value();
  let roofval = roof.value();
  let mal = maling.value();
  let roofmal = romal.value();
  let placement = plac.value();

  fill(mal, 100, 200);
  strokeWeight(5);
  for (let i = 0; i < etagval; i++) {
    rect(placement, 500 - 50 * i, 200, 50);
  }
  fill(100, roofmal, 100);
  triangle(
    placement,
    550 - 50 * etagval,
    placement + 200,
    550 - 50 * etagval,
    placement + 100,
    550 - roofval * 12 - 50 * etagval
  );
  //(50, 500 - 50 * etagval, 200, 50);
  tree();
  leaves();
}
function cloud() {
  fill(255);

  for (let i = 0; i < 9; i++) {
    circle(x - sin(30 * i) * 50, y - sin(50 * i) * 20 + random(-2, 2), 40);
  }
}
function Ran() {
  x = random(0, 600);
}
function tree() {
  fill(139, 69, 19);
  let l = længde.value();
  let p = position.value();
  let h = højde.value();
  rect(p, 500 - h, l * 30, h);
}
function leaves() {
  let le = leavesAmount.value();
  let l = længde.value();
  let p = position.value();
  let h = højde.value();
  for (let i = 0; i < le; i++) {
    line(
      p + l * 15,
      500 - h,
      random(p + l / 2 - 100, p + l * 15 + 100),
      random(500 - h - 100, 500 - h + 100)
    );
  }
}
