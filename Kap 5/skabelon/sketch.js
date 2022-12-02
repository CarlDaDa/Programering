let button;
function setup() {
  createCanvas(400, 400);
  background(0);
  button = createButton("click me");
  button.position(200, 200);
  button.mousePressed(changeBG, print("fjkdl"));
}

function changeBG() {
  let val = random(255);
  background(val);
}
