function setup() {
  for (let i = 0; i < 5; i++) {
    randomNum();
    print(num);
  }
}

function randomNum() {
  num = int(random(0, 37));
}
