// const INCH = 72;
// const TAB_WIDTH = 0.5 * INCH;

// let boxWidth = 300;
// let boxHeight = 200;
// let boxDepth = 200;

// let TAB_WIDTH = 20;
// let leftPadding;
// let topPadding;

// let topFace, backFace,frontFace,leftFace,bottomFace;

let eyeUp = document.getElementById("eyeUp");
let eyeDown = document.getElementById("eyeDown");
let eyeUpSize = 48;
let eyeDownSize = 44;
let eyeDownTxt = eyeDown.getElementsByTagName("textPath")[0].innerHTML;
let txtLen;

// draw shape
let noiseMax = 0.01;
let zoff = 0;
let ox, oy;
let rMAX;
let palette = [
  "#fff",
  "#A4BEFE",
  "#FCDC84",
  "#FBB2A4",
  "#81EDF4",
  "#C5A4FC",
  "#67EF96",
  "#9468F8",
  "#688CFD",
  "#30B8DB",
  "#0BCB74",
  "#F8B633",
  "#F46768",
];

let bgPalette = [
  "#FF8A80",
  "#FF80AB",
  "#B388FF",
  "#8C9EFF",
  "#82B1FF",
  "#80D8FF",
  "#81F0D7",
  "#A2F3B9",
  "#F5F572",
  "#FFE57F",
  "#FFD180",
  "#FF9E80",
];

let eyeBgColor;

function setup() {
  let canv = createCanvas(800, 800);
  canv.parent("mainCanvas");
  eyeBgColor = random(bgPalette);

  angleMode(DEGREES);

  // background(255);
  updateSticker();
  // drawEye();

  noLoop();
}

function drawEye() {

  eyeUp.setAttribute("width", `${width}`);
  eyeUp.setAttribute("height", `${height - 10}`);
  eyeUp
    .getElementsByTagName("path")[0]
    .setAttribute(
      "d",
      `M 200 ${height / 2} C 300 300, 500 300, 600 ${height / 2}`
    );
  eyeUp.getElementsByTagName("path")[0].setAttribute("stroke", "transparent");
  eyeUp.getElementsByTagName("path")[0].setAttribute("fill", "transparent");
  eyeUp.style.fontSize = `${eyeUpSize}px`;
  eyeUp.style.fontWeight = "800";
  eyeUp.getElementsByTagName("text")[0].style.fill = eyeBgColor;

  eyeDown.setAttribute("width", `${width}`);
  eyeDown.setAttribute("height", `${height}`);
  eyeDown
    .getElementsByTagName("path")[0]
    .setAttribute(
      "d",
      `M 200 ${height / 2 + 10} C 300 500, 500 500, 600 ${height / 2 + 10}`
    );
  eyeDown.getElementsByTagName("path")[0].setAttribute("stroke", "transparent");
  eyeDown.getElementsByTagName("path")[0].setAttribute("fill", "transparent");

  console.log("eyeDownTxt:" + eyeDownTxt);
  txtLen = textWidth(eyeDownTxt.toUpperCase());
  // txtLen = textWidth(eyeDownTxt);
  console.log("eyeDownTxt:" + eyeDownTxt);
  console.log("textWidth:" + txtLen);
  console.log("txtLength:" + eyeDownTxt.length);

  //reponsive length
  // eyeDownSize = txtLen;

  eyeDownSize = 22/eyeDownTxt.length;
  // eyeDownSize = 292.7 / txtLen;
  // eyeDownSize= 292.7/txtLen;

  eyeDown.style.fontSize = `${eyeDownSize * 2.3}em`;

  eyeDown.style.fontWeight = "800";

  eyeDown.getElementsByTagName("text")[0].style.fill = eyeBgColor;

  drawEyeBg();

  console.log(eyeDownSize);
}

// function drawEyeBg(){
//   drawingContext.filter = 'blur(3px)';
//   ox = width/2;
//   oy = height/2-10;
//   push();
//   // translate(ox, oy);
//   noStroke();
//   let gradientFillEye = drawingContext.createRadialGradient(
//     ox, oy, 20,
//     ox, oy, 300
//   );

//   gradientFillEye.addColorStop(0, color(random(palette)));
//   gradientFillEye.addColorStop(1, color(255, 255, 255, 0));

//   drawingContext.fillStyle = gradientFillEye;
//   ellipse(ox,oy,400,200);
// pop();
// }

// https://openprocessing.org/sketch/1213328

function drawEyeBg() {
  eyeBgColor = random(bgPalette);
  document.getElementById("gradStop1").style.stopColor = eyeBgColor;
}

function drawColor(tearPalette, tearNum) {
  // background(0);
  clear();
  drawingContext.filter = "blur(3px)";

  noStroke();
  fill(0);
  rMAX = min(width, height) * 0.1 * random(2, 3.5);
  rMAX = 240;

  for (let i = 0; i < tearNum; i++) {
    zoff = 1;
    ox = width / 2;
    oy = height / 2 - 10;
    // rMAX = min(width, height) * 0.1 * random(1, 5);

    push();
    translate(ox, oy);
    rotate(random(-360, 360));

    let gradientFill = drawingContext.createRadialGradient(
      0,
      0,
      (rMAX * 0.15) / (i + 1),
      0,
      0,
      (rMAX * 0.6) / (i + 1)
    );

    console.log(tearPalette);
    gradientFill.addColorStop(0, color(random(tearPalette)));

    gradientFill.addColorStop(1, color(255, 255, 255, 0));

    drawingContext.fillStyle = gradientFill;

    beginShape();

    for (let t = 0; t < 360; t++) {
      let xoff = map(cos(t), -1, 1, 0, noiseMax);
      let yoff = map(sin(t), -1, 1, 0, noiseMax);

      // let n = noise(xoff, yoff, zoff);
      let n = 1;
      let r = map(n, 0, 1, 0, rMAX);
      let x = r * cos(t);
      let y = r * sin(t);

      vertex(x, y);
    }

    endShape(CLOSE);

    // ellipse(width/2,height/2,30*(i+1),30*(i+1));
    // circle(width/2,height/2,30*(i+1));

    pop();
  }
}

function draw() {
  // background(255);
}
