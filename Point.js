function Point(x) {
    this.height = 0;
    this.radius = 5;
    this.x = x;
}

Point.prototype.setHeight = function(value) {
    this.height = value;
};

Point.prototype.getHeight = function(value) {
    return this.height;
};

Point.prototype.getX = function() {
    return this.x;
};

Point.prototype.setX = function(x) {
    this.x = x;
};

Point.prototype.getRadius = function() {
    return this.radius;
};

Point.prototype.setRadius = function(radius) {
    this.radius = radius;
};

Point.prototype.getY = function() {
    return map(this.getHeight(), 0, 1, height, 0);
};

Point.prototype.draw = function() {
    fill(255);
    noStroke();
    ellipse(this.getX(), this.getY(), this.getRadius(), this.getRadius());
};
