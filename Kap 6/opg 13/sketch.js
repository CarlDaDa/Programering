let længde;
let position;
let højde;
let leavesAmount;

function setup() {
  createCanvas(600, 600);

  længde = createSlider(1, 10, 3, 1);
  længde.position(10, 10);
  længde.style("width", "200px");

  position = createSlider(50, 550, 50, 1);
  position.position(10, 30);
  position.style("width", "200px");

  højde = createSlider(50, 450, 50, 1);
  højde.position(10, 50);
  højde.style("width", "200px");

  leavesAmount = createSlider(1, 6, 3, 1);
  leavesAmount.position(380, 10);
  leavesAmount.style("width", "200px");
}

function draw() {
  background(220);
  tree();
  leaves();
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
