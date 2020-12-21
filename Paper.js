class Paper {
constructor(x, y, radius){
    var options= {
        isStatic : false,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }
    this.body = Matter.Bodies.circle(x, y, radius, options);
    this.image = loadImage("sprites/paper.png");
    this.radius = radius;
    World.add(world, this.body);
}
 display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    ellipseMode(RADIUS);
    fill("pink");
    stroke("blue");
    strokeWeight(4);
    ellipse(0, 0, this.radius, this.radius);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius, this.radius);
    pop();
}
}