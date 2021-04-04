class Ball{
    constructor(x, y,radius) {
        var options = {
            'restitution':1.5,
            'friction':0.5,
            'density':1.0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius=radius
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        //var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        ellipseMode(CENTER);
        //fill(255);
        circle(0,0,this.radius);

        this.body.position.x=mouseX;
        this.body.position.y=mouseY; 
        pop();
      }




}