var drawGlob = function(){
    if (mousePressed) {
        var x = random(0,50);
        var y = random(0,50);
        fill(random(0,255), random(0,255), random(0,255));
        ellipse(mouseX, mouseY, y, x); 
    } 
};

var draw = function() {
    noStroke();
    drawGlob();
};