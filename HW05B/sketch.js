let r = 15;
let p;
let colors;
let currentColorIndex = 0;
function setup() {
  angleMode(DEGREES);
  let p = 0;
  colors = [
    color(59, 190, 255),
    color(252, 66, 87),
    color(105, 105, 105),
    color(84, 255, 144),
    color(255, 255, 255),
  ];
}

function draw() {
  push();
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();

  for (let n = 0; n < windowWidth; n += 100) {
    for (let d = 0; d < windowWidth; d += 100) {
      let c = random(0, 50);
      fill(c);
      let ab = dist(n, d, windowWidth / 2, windowHeight / 2);
      let l = map(
        ab,
        0,
        dist(0, 0, windowWidth / 2, windowHeight / 2),
        -20,
        70
      );
      let ran1 = random(-r, r);
      ellipse(n + ran1, d + ran1, l + ran1);
    }
  }
  pop();
  let c;

  let p = millis() % windowWidth;


  push();
  noStroke();
  fill(colors[currentColorIndex]);
  ellipse(p, mouseX / 2, 300, 300);

  pop();

  push();
  noFill();
  stroke(255);
  strokeWeight(3);
  arc(p, mouseX / 2 + 30, 500, 80, -10, 190);
  arc(p, mouseX / 2 + 30, 600, 90, -10, 190);
  arc(p, mouseX / 2 + 30, 700, 100, -15, 195);
  pop();
}
function mousePressed() {
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}
