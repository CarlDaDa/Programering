let etager;
let roof;
let maling;
let romal;
let plac;

function setup() {
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
}

function draw() {
  let etagval = etager.value();
  let roofval = roof.value();
  let mal = maling.value();
  let roofmal = romal.value();
  let placement = plac.value();
  background(250);
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
}
