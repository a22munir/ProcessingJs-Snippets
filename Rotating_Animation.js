var angle = 0;

var moveEllipse = function(){
    translate(200, 200);
    rotate(angle); 
    fill(mouseX, 100, mouseY);
    ellipse(125, 25, 100, 100);
    angle += 2;
    resetMatrix();
};

var draw = function(){
    moveEllipse();
};