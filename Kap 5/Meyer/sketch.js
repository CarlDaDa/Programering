//todo:
//random placement of dice
//multiplayer
//rafflebæger / peak / check
//players / lives
//menu

let dice1 = 1;
let dice2 = 2;
let result;
let musx = false;
let musy = false;
let player1;
let player2;
let letRoll = true;
let button;
let dice1y = random(300) + 50;
let myButton;

function setup() {
  createCanvas(400, 400);
  background(150, 32, 34);
  //button

  fill(66, 18, 19);
  rect(20, 20, 120, 60, 8);
  fill(0);
  textAlign(CENTER);
  stroke(100);
  strokeWeight(2);
  text("ROLL", 80, 55);
}

function draw() {
  //menu();
  letRoll = true;
  if (letRoll == true) {
    rollbutton();
    let dice1x = 150;

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
}

function menu() {
  letRoll = false;
  noStroke();

  fill(150, 32, 34);
  rect(0, 0, height, width);
  fill(66, 18, 19);
  rect(width / 2 - 75, 20, 150, 40, 5, 5, 5, 5);
  textAlign(CENTER);
  fill(255);
  text("Meyer!", width / 2, 45);

  fill(66, 18, 19);
  rect(width / 2 - 60, 100, 120, 30, 5, 5, 5, 5);
  fill(255);
  text("how many players?", width / 2, 120);

  myButton = new Button({
    x: 50,
    y: 160,
    width: 20,
    height: 20,
    align_x: 0,
    align_y: 0,
    content: "1",
  });

  // for (let i = 0; i < 6; i++) {
  //   fill(66, 18, 19);
  //   rect(50 * i + 67, 160, 20, 20, 2);
  //   fill(255);
  //   text(i + 1, 50 * i + 77, 175);
  // }
  // for (let j = 6; j < 12; j++) {
  //   fill(66, 18, 19);
  //   rect(50 * j - 300 + 67, 200, 20, 20, 2);
  //   fill(255);
  //   text(j + 1, 50 * j + 77 - 300, 215);
  // }
}
mousePressed;
function rollbutton() {
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
