var draw = function(){
    var raindropSize = map(mouseX, 0, width, 2, 18);
    var x = round(random(width));
    var y = round(random(height));
    fill(56, 155, 242, 50);
    noStroke();
    ellipse(x, y, raindropSize, raindropSize);
};

