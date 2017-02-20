var draw = function(){
    background(0, 0, 0, 0.5);
    stroke(mouseX, mouseY, (mouseY+mouseX)/2);
    for (var i = 0; i < 400; i++){
        var randX = random(0, 400);
        var randY = random(0, 400);
        line(randX, randY, mouseX, mouseY);
    }
};

