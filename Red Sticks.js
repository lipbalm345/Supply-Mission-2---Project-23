class redSticks{
    constructor(x,y) {
        var options = {
        isStatic = true,
        'restitution':0,
        'friction':0.3,
        'density':1.0
        }
        this.body = Bodies.rectangle(x,y,20,10,options);
        this.width = 20;
        this.height = 10;
        World.add(world, this.body);
    }
   display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(4);
      stroke("red");
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
};