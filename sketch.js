function setup() {
    createCanvas(1500, 1000);
    angleMode(DEGREES);
}
    
let xPos = 1200;
let yPos = 1800;
let xSneeuwman = 190;
let ySneeuwman = 320;

function draw() { 
background("darkblue");
fill('white')
noStroke();
    circle(xSneeuwman, ySneeuwman, 100);
    circle(xSneeuwman, ySneeuwman - 60, 70);
    circle(xSneeuwman, ySneeuwman - 100, 40);
    fill("black");
    circle(xSneeuwman - 5, ySneeuwman - 105, 5);
    circle(xSneeuwman + 5, ySneeuwman - 105, 5);
    fill("orange");
    circle(xSneeuwman, ySneeuwman - 100, 5);

stroke(51);

fill("grey");

arc(xPos + 100, yPos + 2, 240, 240, 180, 0, HALF_PI);

fill(0,90)
    noStroke();
    rect(xPos - 20, yPos, 240, 1000);

fill("red");
stroke(51);

triangle(xPos - 20, yPos, xPos + 220, yPos, xPos + 100, yPos + 220);

fill("orange");

triangle(xPos, yPos, xPos + 200, yPos, xPos + 100, yPos + 190);

fill("yellow");

triangle(xPos + 20, yPos, xPos + 180, yPos, xPos + 100, yPos + 160);

fill("white");

triangle(xPos, yPos - 515, xPos + 200, yPos - 515, xPos + 100, yPos - 665);
rect(xPos, yPos - 515, 200, 450);
 
 fill("grey");

 triangle(xPos + 65, yPos - 612.5, xPos + 135, yPos - 612.5, xPos + 100, yPos - 665);
 circle(xPos + 100, yPos - 564, 80);

 fill("lightblue");

 circle(xPos + 100, yPos - 564, 70);

 textFont("Ready Player One");
    let naam = "Stefan";
   textSize(200);
    text("Stefan", 100, 500);
    

    let naam1 = "S";
    textSize(100);
    text("S", xPos + 60, yPos - 425);

    let naam2 = "p";
    textSize(80);
    text("p", xPos + 71.5, yPos - 360);

    let naam3 = "a";
    textSize(80);
    text("a", xPos + 71.5, yPos - 295);

    let naam4 = "c";
    textSize(80);
    text("c", xPos + 71.5, yPos - 230);

    let naam5 = "e";
    textSize(80);
    text("e", xPos + 71.5, yPos - 165);

    let naam6 = "X";
    textSize(100);
    text("X", xPos + 60, yPos - 90);

    if(keyIsDown(90) == true) {
        ySneeuwman = ySneeuwman - 10;
    }
    if(keyIsDown(83) == true) {
        ySneeuwman = ySneeuwman + 10;
    }
    if(keyIsDown(81) == true) {
        xSneeuwman = xSneeuwman - 10;
    }
    if(keyIsDown(68) == true) {
        xSneeuwman = xSneeuwman + 10;
    }
    yPos = yPos - 5
}