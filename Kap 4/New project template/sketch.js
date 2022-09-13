let CircleX
let CircleY
let SquareX
let SquareY
let OstX
let OstY
let d = 30;
let speed = 5;
let SP =  0;
let CP = 0;
let caught = false
function setup() {
  createCanvas(512, 512);
  CircleX = random(1,500);
  CircleY = random(1,500);
  SquareX = random(1,500);
  SquareY = random(1,500);
  OstX = random(1,500);
  OstY = random(1,500);
  
}

function draw() {
  frameRate(30);
  let DisC = dist(CircleX,CircleY,OstX,OstY);
  let DisS = dist(SquareX,SquareY,OstX,OstY);

if(DisC<d+2/d){CP+=1,caught=true};
if(DisS<d+2/d){SP+=1,caught=true};

  if (keyIsDown(LEFT_ARROW)) {
    CircleX -= speed;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    CircleX += speed;
  }

  if (keyIsDown(UP_ARROW)) {
    CircleY -= speed;
  }

  if (keyIsDown(DOWN_ARROW)) {
    CircleY += speed;
  }


 if (keyIsPressed) {  
    if ((key == 'w') || (key == 'W')) { (SquareY -= speed); } 
    if ((key == 's') || (key == 'S')) { (SquareY += speed); } 
    if ((key == 'a') || (key == 'A')) { (SquareX -= speed); } 
    if ((key == 'd') || (key == 'D')) { (SquareX += speed); } 
    if (keyIsDown('w')) {(SquareY -= speed); }  

  } 
  clear();
  fill(255, 255, 0);

  ellipse(OstX,OstY,d/2,d/2,);
  fill(255, 0, 0);

  rect(SquareX, SquareY, d, d);
  ellipse(CircleX, CircleY, d, d);
  strokeWeight(2)

  d=30
  console.log(DisS)
  console.log(CP,SP)
}