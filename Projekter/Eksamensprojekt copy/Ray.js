function deathRay() {
  if (Raylen < 1) {
    hit = true;
  }

  if (hit == false) {
    if (Raylen > 0) {
      if (keyIsDown(32) || keyIsDown(38)) {
        fill("Red");
        noStroke;
        Raylen -= 0.8;

        quad(
          playerx - 5,
          playery,
          playerx + 5,
          playery,
          playerx + 5,
          0,
          playerx - 5,
          0
        );

        if (playerx < pointX + pointR && playerx > pointX - pointR) {
          crashAnimation(pointX, pointY, 10);
          pointX = random(100, 500);
          pointY = pointY - (height + 70);
          print("point");
          Raylen += 30;
        }
      }
    }
  }
}
