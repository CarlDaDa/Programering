function setup() {
  createCanvas(600, 600);
  background(0, 100, 150);
  strokeWeight(10);
  let lige = [];
  let ulige = [];
  for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
      lige.push(i);
    } else {
      ulige.push(i);
    }
  }
  print(ulige[25], lige[25]);
  // for (let j = 0; 1 < 101; 1++) {
  //   if (j % 2 == 0) {
  //     text(j, random(width / 2), random(height));
  //   } else {
  //     text(j, random(width / 2) + width / 2, random(height));
  //   }
  // }
  // text(j, random(width / 2), random(height));
  for (let i = 0; i < lige.length; i++) {
    text(lige[i], random(width / 2), random(height));
  }
  for (let i = 0; i < lige.length; i++) {
    text(ulige[i], random(width / 2) + 300, random(height));
  }
}
