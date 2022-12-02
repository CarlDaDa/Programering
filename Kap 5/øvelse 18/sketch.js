// // let liste = [7, 4, 5, 6, 9, 1, 2, 8, 3, 10];
// let liste = [7, 4];
// let størst = liste[0];
// function setup() {}

// function draw() {
//   for (let i = 0; i < liste.length; i++) {
//     print(liste[i]);
//     if (liste[i] > størst) {
//       liste[i] = størst;
//     }
//   }
// }

let cx = 200;
let cy = 200;
angleMode = 0;
function setup() {
  createCanvas(400, 400);
  background(150, 32, 34);
  angleMode(DEGREES);
}
function draw() {
  line(cx, cy, 30, 30);
  for (let i = 0; i < 360; i++) {
    const element = array[i];
  }
  rotate(10);
}
