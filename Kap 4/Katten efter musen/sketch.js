let a 
let b
let x
let y
let d = 20
let speed = 1
let catx
let caty


function setup() {
  createCanvas(640, 360);
  x =(random(5,width-5));
  y = (random(5,height-5));
  catx =(random(5,width-5));
  caty = (random(5,height-5));
}

function draw() {
  frameRate(30)
  background(220);

  ellipse(x,y,d,d)
  rect(catx,caty,d,d,3)
  strokeWeight(1);

  a=0
  b=0
  if(keyIsPressed(RIGHT_ARROW))

  x+=a
  y+=b
}
