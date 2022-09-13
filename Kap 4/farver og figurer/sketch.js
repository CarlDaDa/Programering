function setup() {
  createCanvas(600, 400);
  frameRate(100)
}
function draw() {
  
strokeWeight(10)
fill(255)
 if (mouseX < 100){
  background(0,10,255)
 }

 else if (mouseX>500){
  background(255,0,0)
 }
 else {
  background(0,255,0)
 }
 //circle(mouseX,mouseY,10)
 if (mouseX>width/2) {
   circle((width/2),(height/2),100)
 }
else {
  rect((width/2)-50,(height/2)-50,100,100)
}

}

