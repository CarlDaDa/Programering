let dice1;
let dice2;
let result;
let musx = false;
let musy = false;

function setup() {
  createCanvas(400, 400);
  background(150, 32, 34);
  //buttton

  fill(66, 18, 19);
  rect(20, 20, 120, 60, 8);
  fill(0);
  textAlign(CENTER);
  stroke(100);
  strokeWeight(2);
  text("ROLL", 80, 55);
}

function draw() {
  button();

  let dice1x = 150;
  let dice1y = 250;
  let dice2x = 275;
  let dice2y = 100;

  // draw dice 1
  stroke(1);
  fill(249, 246, 238);
  //rect(150, 250, 75, 75, 10);
  square(dice1x, dice1y, 100, 10, 10, 10, 10);
  fill(0);
  if (dice1 == 1) {
    circle(dice1x + 50, dice1y + 50, 10);
  }
  if (dice1 == 2) {
    circle(dice1x + 25, dice1y + 75, 10);
    circle(dice1x + 75, dice1y + 25, 10);
  }
  if (dice1 == 3) {
    circle(dice1x + 25, dice1y + 25, 10);
    circle(dice1x + 50, dice1y + 50, 10);
    circle(dice1x + 75, dice1y + 75, 10);
  }

  if (dice1 == 4) {
    circle(dice1x + 25, dice1y + 25, 10);
    circle(dice1x + 25, dice1y + 75, 10);
    circle(dice1x + 75, dice1y + 25, 10);
    circle(dice1x + 75, dice1y + 75, 10);
  }
  if (dice1 == 5) {
    circle(dice1x + 50, dice1y + 50, 10);
    circle(dice1x + 25, dice1y + 25, 10);
    circle(dice1x + 25, dice1y + 75, 10);
    circle(dice1x + 75, dice1y + 25, 10);
    circle(dice1x + 75, dice1y + 75, 10);
  }
  if (dice1 == 6) {
    circle(dice1x + 25, dice1y + 25, 10);
    circle(dice1x + 25, dice1y + 75, 10);
    circle(dice1x + 75, dice1y + 25, 10);
    circle(dice1x + 75, dice1y + 75, 10);
    circle(dice1x + 25, dice1y + 50, 10);
    circle(dice1x + 75, dice1y + 50, 10);
  }
  // draw dice 2
  stroke(1);
  fill(249, 246, 238);
  //rect(150, 250, 75, 75, 10);
  square(dice2x, dice2y, 100, 10, 10, 10, 10);
  fill(0);
  if (dice2 == 1) {
    circle(dice2x + 50, dice2y + 50, 10);
  }
  if (dice2 == 2) {
    circle(dice2x + 25, dice2y + 75, 10);
    circle(dice2x + 75, dice2y + 25, 10);
  }
  if (dice2 == 3) {
    circle(dice2x + 25, dice2y + 25, 10);
    circle(dice2x + 50, dice2y + 50, 10);
    circle(dice2x + 75, dice2y + 75, 10);
  }

  if (dice2 == 4) {
    circle(dice2x + 25, dice2y + 25, 10);
    circle(dice2x + 25, dice2y + 75, 10);
    circle(dice2x + 75, dice2y + 25, 10);
    circle(dice2x + 75, dice2y + 75, 10);
  }
  if (dice2 == 5) {
    circle(dice2x + 50, dice2y + 50, 10);
    circle(dice2x + 25, dice2y + 25, 10);
    circle(dice2x + 25, dice2y + 75, 10);
    circle(dice2x + 75, dice2y + 25, 10);
    circle(dice2x + 75, dice2y + 75, 10);
  }
  if (dice2 == 6) {
    circle(dice2x + 25, dice2y + 25, 10);
    circle(dice2x + 25, dice2y + 75, 10);
    circle(dice2x + 75, dice2y + 25, 10);
    circle(dice2x + 75, dice2y + 75, 10);
    circle(dice2x + 25, dice2y + 50, 10);
    circle(dice2x + 75, dice2y + 50, 10);
  }
}

function button() {
  if (mouseX > 20) {
    if (mouseX < 140) {
      //print("midt");
      musx = true;
    } else {
      //print("højre");
      musx = false;
    }
  } else {
    //print("venstre");
    musx = false;
  }
  //print(musx);

  if (mouseY > 20) {
    if (mouseY < 80) {
      // print("midt");
      musy = true;
    } else {
      //print("under");
      musy = false;
    }
  } else {
    //print("over");
    musy = false;
  }
  //print(musy);

  if (musx == true) {
    if (musy == true) {
      if (mouseIsPressed == true) {
        roll();
      }
    }
  }
}

function roll() {
  dice1 = int(random(6) + 1);
  dice2 = int(random(5) + 1);
  print(dice1, dice2);

  if (dice1 == dice2) {
    result = dice1 * 10 + dice2;
  } else if (dice1 > dice2) {
    result = dice1 * 10 + dice2;
  } else if (dice1 < dice2) {
    result = dice2 * 10 + dice1;
  }
  print(result);
}
