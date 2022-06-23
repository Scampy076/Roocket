function setup() {
    createCanvas(1500, 1000);
    background("darkblue");
    angleMode(DEGREES);
         
let xPos = 190;
let yPos = 320;

noStroke();
    circle(xPos, yPos, 100);
    circle(xPos, yPos - 60, 70);
    circle(xPos, yPos - 100, 40);
    fill("black");
    circle(xPos - 5, yPos - 105, 5);
    circle(xPos + 5, yPos - 105, 5);
    fill("orange");
    circle(xPos, yPos - 100, 5);
    stroke(51);

    fill("grey");
    
    arc(1300, 752, 240, 240, 180, 0, HALF_PI);
    
    fill(0,90)
        noStroke();
        rect(1180, 750, 240, 250);
    
        stroke(51);
    
    fill("red");
    
    triangle(1180, 750, 1420, 750, 1300, 970);
    
    fill("orange");
    
    triangle(1200, 750, 1400, 750, 1300, 940);
    
    fill("yellow");
    
    triangle(1220, 750, 1380, 750, 1300, 910);
    
    fill("white");
    
    triangle(1200, 235, 1400, 235, 1300, 85);
    rect(1200, 235, 200, 450);
     
     fill("grey");
    
     triangle(1265, 137.5, 1335, 137.5, 1300, 85);
     circle(1300, 186, 80);
    
     fill("lightblue");
    
     circle(1300, 186, 70);
    
     textFont("Ready Player One");
        let naam = "Stefan";
       textSize(200);
        text("Stefan", 100, 500);
        
    
        let naam1 = "S";
        fill("lightblue")
        textSize(100);
        text("S", 1260, 325);
    
        let naam2 = "p";
        fill("lightblue")
        textSize(80);
        text("p", 1271.5, 390);
    
        let naam3 = "a";
        fill("lightblue")
        textSize(80);
        text("a", 1271.5, 455);
    
        let naam4 = "c";
        fill("lightblue")
        textSize(80);
        text("c", 1271.5, 520);
    
        let naam5 = "e";
        fill("lightblue")
        textSize(80);
        text("e", 1271.5, 585);
    
        let naam6 = "X";
        fill("lightblue")
        textSize(100);
        text("X", 1260, 660);
    }




