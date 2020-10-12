class Ball{
    constructor(x,y,radius){
    var options ={
    
    'restitution':2,
    'friction':3,
    'density':5,
    isStatic:false
    
    
    
    }
    
    this.body=Bodies.circle(x,y,radius,options);
  
    World.add(world,this.body);
    
    
    
    
    }
    
    display(){
    var pis=this.body.position;
    pis.x=mouseX
    pis.y=mouseY
    push();
    translate(pis.x,pis.y);
    ellipseMode(CENTER);
    ellipse(0,0,this.radius)
    pop();
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    }