
let s,m,h;
let starttime=6500;
function setup() {
  createCanvas(windowWidth, windowHeight);
  let starttime
  let s=0;
  let m=58;
  let h=14;
angleMode(DEGREES);

}

function draw() {
  background(191, 0, 0);
  for (let n = 400; n < 7000; n+=150) {
    noFill(0);
    strokeWeight(2);
    ellipse(windowWidth/2,windowHeight/2,n);
  
  }
  fill(0);
  noFill();
  strokeWeight(100);
  stroke(0);
  stroke(50);
  stroke(100);

  let s=int(millis()/1000+starttime*60*1000);
  let m=int(s/60);
  let h=int(m/60);

  let sd= s%60;
  let sdd=map(sd,0, 60,0,360);
  let md= m%60;
  let mdd=map(md,0, 60,0,360);
  let hd= h%24;
  let hdd=map(hd,0, 24,0,360);

  clockback();
  
push();
stroke(0);
  arc(windowWidth/2, windowHeight/2, 800, 800, 0, sdd);
  pop();

  push();
  stroke(0);
  arc(windowWidth/2, windowHeight/2, 1100, 1100, 0, mdd);
  pop();

  push();
  stroke(0);
  arc(windowWidth/2, windowHeight/2, 1400, 1400, 0, hdd);
pop();
  drawdot();     

}

function clockback() {
stroke(128, 32, 19);
  arc(windowWidth/2, windowHeight/2, 800, 800, 0, 360);
  arc(windowWidth/2, windowHeight/2, 1100, 1100, 0, 360);

  arc(windowWidth/2, windowHeight/2, 1400, 1400, 0, 360);

}

function drawdot(x,y) {
  push();
  noStroke();
  fill(220);
ellipse(windowWidth/2+400,windowHeight/2, 100);
ellipse(windowWidth/2+550,windowHeight/2, 100);
ellipse(windowWidth/2+700,windowHeight/2, 100);
pop();
  }
