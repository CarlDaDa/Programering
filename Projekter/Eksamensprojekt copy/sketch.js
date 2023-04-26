let gameState = 0;
let Highscore = 100;
let finalTime;

function setup() {
  createCanvas(600, 600);

  pipeEater();

  generateStars(200);

  generatePoint();
}

function draw() {
  updateBG();

  //print(finalTime);

  if (gameState == 0) {
    menu();
  }
  if (gameState == 1) {
    game();
  }

  //checks if framerate drops
  //print(frameRate(), millis());
}

function game() {
  //noCursor();

  deathRay();

  drawPlayer();

  pipe();

  collision();

  if (hit == false) {
    pipey += pipespeed;
    pointY += pipespeed;
    movement();
    points();

    rectMode(CORNER);
    fill("Purple");
    rect(10, 10, Raylen, 10);
  } else {
    if (time == false) {
      finalTime = millis();
      print(finalTime);
      time = true;
    }
    crashAnimation(playerx, playery, 80);
    starMaxSpeed = 0.5;
    if (millis() > finalTime + 2000) {
      gameState = 0;
    }
  }
}

function menu() {
  fill(65, 255, 65);
  textAlign(CENTER);
  textSize(45);
  text("FLYING SPACE BIRDS", width / 2, 100);
  fill(0, 191, 255);
  textSize(30);
  text("Highscore:", width / 2, 150);
  text(Highscore, width / 2, 200);

  fill("grey");
  rectMode(CENTER);
  rect(width / 2, 250, 100, 50, 10);
  fill("white");
  textSize(25);
  text("START", width / 2, 258);

  if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50) {
    if (mouseY > 225 && mouseY < 275) {
      if (mouseIsPressed == true) {
        gameState = 1;
      }
    }
  }
}
