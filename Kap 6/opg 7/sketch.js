let ord = ["k", "a", "t"];

function setup() {
  createCanvas(400, 400);
  background(120);

  input = createInput();
  input.position(20, 20);

  button = createButton("submit");
  button.position(input.x + input.width, 20);
  button.mousePressed(check);
  for (let i = 0; i < ord.length; i++) {
    print(ord[i]);
  }
}

function check() {
  let bogstav = input.value;
  print(bogstav);
  for (let i = 0; i < ord.length; i++) {
    if ((bogstav = "k")) {
      fill(255);
      rect(10, 10, 400, 400);
    }
  }
}
