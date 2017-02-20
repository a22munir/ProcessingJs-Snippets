var mouseClicked = function () {
	fill(random(0, 255), random(0, 255), random(0, 255));
};

var draw = function () {
	var mouseDist = dist(200, 200, mouseX, mouseY);
	for (var i = 0; i < 30; i++) {
		resetMatrix();
		translate(200, 200);
		rotate(i * 20);
		rect(0, mouseDist, mouseDist / 2, mouseDist / 2);
	}
};
