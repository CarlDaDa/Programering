let treeTrunk, treeTrunk2, leaves, leaves2, leaves3;
function setup() {
  createCanvas(600, 600);
  treeTrunk = new Trunks();
  treeTrunk2 = new Trunks();
  leaves = new Leaves();
  leaves2 = new Leaves();
  leaves2.y -= 30;
  leaves3 = new Leaves();
  leaves3.y -= 60;
  // treeTrunk2.setColor("BLUE");
  // treeTrunk2.x = 300;
}
function draw() {
  //background(220);
  treeTrunk.show();
  treeTrunk.setColor("brown");
  leaves.show();
  leaves2.show();
  leaves3.show();
  //treeTrunk2.show();
}
class Trunks {
  constructor() {
    this.x = width / 2;
    this.y = 400;
    this.w = 50;
    this.h = 100;
    this.color = "Black";
  }
  show() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }
  setColor(c) { 
    this.color = c;
  }
}
class Leaves {
  constructor() {
    this.x = treeTrunk.x;
    this.y = 400;
    this.w = 100;
    this.c = this.x + 25;
  }
  show() {
    fill("green");
    triangle(
      this.x - this.w / 2,
      this.y,
      this.x + this.w,
      this.y,
      this.x + 25,
      this.y - 100
    );
  }
}
