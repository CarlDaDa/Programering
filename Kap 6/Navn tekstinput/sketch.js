let input, button, greeting;
let efter;
function setup() {
  // create canvas
  createCanvas(710, 400);
  background(120);

  input = createInput();
  input.position(20, 65);
  efter = createInput();
  efter.position(20, 90);

  button = createButton("Submit");
  button.position(input.x + input.width + 5, 65);
  button.mousePressed(greet);

  greeting = createElement("h2", "What is your name?");
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = int(input.value());
  const last = int(efter.value());
  sum = name + last;
  greeting.html(sum);
  input.value("");
  efter.value("");
}
