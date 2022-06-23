function setup() {
    createCanvas(1500, 800);
    background("black");
    angleMode(DEGREES);

    textFont("Ready Player One")
    let naam = "Stefan";
    fill("lightblue")
   textSize(200);
    text("Stefan", 100, 500);

    noStroke();
    
    let xPos = 190;
    let yPos = 320;
    
        circle(xPos, yPos, 100);
        circle(xPos, yPos - 60, 70);
        circle(xPos, yPos - 100, 40);
        fill("black");
        circle(xPos - 5, yPos - 105, 5);
        circle(xPos + 5, yPos - 105, 5);
        fill("orange");
        circle(xPos, yPos - 100, 5);

        fill("red")
        triangle("1200, 500, 1400, 500, 1300, 300");
        }
