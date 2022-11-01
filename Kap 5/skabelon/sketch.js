let niv;
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 26; i++) {
    niv = (26 - i * 26 - 3 - i) / 2*1/i!;
    text(niv, height / 2 + 10 * i, 100 / 2 + 10 * i);
  }
}
