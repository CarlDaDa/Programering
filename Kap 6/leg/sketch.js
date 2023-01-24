let slid;
let x1 = 300;
let y1 = 150;
let y2 = 450;
let ins;

function setup() {
  createCanvas(600, 600);
  slid = createSlider(-290, 290, 25, 1);
  slid.position(10, 10);
  slid.style("width", "200px");
  ins = createElement("h3", "Hvor bred skal den være?");
  ins.position(230, -10);
}

function draw() {
  background(220);
  fill(0, 0, 255);
  line(x1, y1, 300 - slid.value(), 300);
  line(x1, y1, 300 + slid.value(), 300);
  line(x1, y2, 300 - slid.value(), 300);
  line(x1, y2, 300 + slid.value(), 300);
  rect(10, 30, 50, 50);
}
