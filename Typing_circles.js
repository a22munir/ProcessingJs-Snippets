var randomX = 0;
var randomY = 0;

var keyPressed = function(){
    fill(random(0,255), random(0,255), random(0,255));
    randomX = random(50,350);
    randomY = random(50,350);
    ellipse(randomX, randomY, 50, 50);
    fill(255, 255, 255);
    textSize(20);
    text(key, randomX - 5, randomY + 5);
};
