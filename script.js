var points = [];
var stack = [];
var n = 0;
var mic;
var a;

var nPoints = 80;

function setup() {
    canvas = createCanvas(window.innerWidth - 4, window.innerHeight - 4);
    canvas.id("canvas-id");
    for (var i = 0; i < nPoints; i++) {
        points.push(new Point(width / nPoints * i + width / nPoints / 2));
        stack.push(0);
    }
}

function draw() {
    background(0);
    for (var i = 0; i < points.length; i++) {
        points[i].setHeight(stack[i]);
        points[i].draw();
    }
    stack.push(noise(n));
    stack.shift();
    n += 0.01;
}

window.addEventListener('devicemotion', function (event) {
    a = event.accelerationIncludingGravity.x / 9.81;
});
