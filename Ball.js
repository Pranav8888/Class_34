class Ball {
  constructor(x, y, radius) {
      var options = {
          'frictionAir':0.0005,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      noStroke();
      fill(170);
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
}