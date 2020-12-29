class Plinko{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.body = Bodies.circle(x,y,14,options);
    this.radius = this.body.circleRadius;
    World.add(world,this.body);
    }
    display(){
      ellipseMode(CENTER);
      fill("red");
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);


    }
}
