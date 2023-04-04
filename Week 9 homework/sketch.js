//eye var
var eye1X = 175;
var eye1Y = 220;
var eye1mov = 3;

var eye2X = 105;
var eye2Y = 220;
var eye2mov = 5;

//pupil var
var pup1X = 185;
var pup1Y = 220;
var pup1mov = 2;

var pup2X = 115;
var pup2Y = 220;
var pup2mov = 3;

//nose var
var noseX = 135;
var noseY = 230;
var noseMov = 2;

//ear var
var earX = 230;
var earY = 205;
var earMov = 6;

//text var
var size = 5;
var count = 0;
var sizeDirection = 2;

function setup() {
  createCanvas(400, 400);
}
 noseMov = Math.floor(Math.random() * 5) +1;

 eye1mov = Math.floor(Math.random() * 5) +1;

 eye2mov = Math.floor(Math.random() * 5) +1;

 earMov = Math.floor(Math.random() * 5) +1;
 

function draw() {
  background(220);
line(80, 240, 90, 350);
line(90, 350, 200, 350);
line(200, 350, 240, 280);
line(200, 350, 240, 280);
line(260, 220, 260, 380);
line(100, 310, 110, 300);
line(110, 300, 180, 300);
line(180, 300, 190, 310);
line(110, 350, 110, 380);
line(80, 240, 85, 220);
line(85, 220, 82, 210); 
line(82, 210, 84, 186);

//eyes (will move side to side)
//eye 1
circle(eye1X,eye1Y,35);
if (eye1X >= 400 || eye1X <= 0) {
eye1mov *= -1;
}
eye1X += eye1mov;

//eye 2
circle(eye2X,eye2Y,35);
if (eye2X >= 400 || eye2X <= 0) {
eye2mov *= -1;
}
eye2X += eye2mov;


//pupils (will move diagonally but will be kind of hard to see, zoom to get a look at it)

//pupil 1 (will move diagonally but will be kind of hard to see, zoom to get a look at it)
point(pup1X, pup1Y);
if (pup1X >= 400 || pup1X <= 0) {
pup1mov *= -1;
}
pup1X += pup1mov;

if (pup1Y >= 400 || pup1Y <= 0) {
pup1mov *= -1;
}
pup1Y += pup1mov;

//pupil 2 (will move diagonally but will be kind of hard to see, zoom to get a look at it)
point(pup2X, pup2Y);
if (pup2X >= 400 || pup2X <= 0) {
pup2mov *= -1;
}
pup2X += pup2mov;

if (pup2Y >= 400 || pup2Y <= 0) {
pup2mov *= -1;
}
pup2Y += pup2mov;


//nose (will move up and down)
triangle(noseX, noseY, 120, 277, 150, 277);
if (noseY >= 300 || noseY <= 200) {
noseMov *= -1;
}
noseY += noseMov;
//ear (will move up and down)
rect(earX,earY,40,50);
if (earY >= 400 || earY <= 0) {
earMov *= -1;
}
earY += earMov;

line(84, 186, 123, 178); 
line(123, 178, 185, 189);
line(185, 189, 224, 181);
line(224, 181, 246, 205);
line(263, 205, 282, 166);
line(282, 166, 256, 122);
line(256, 122, 200, 108);
line(200, 108, 153, 117);
line(153, 117, 99, 104);
line(99, 104, 52, 131);
line(52, 131, 74, 181);
line(74, 181, 84, 186); 

//title
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }

text('Title: A crudly drawn supposed portrait    By: Manuel Ramirez', 10, 30);
}