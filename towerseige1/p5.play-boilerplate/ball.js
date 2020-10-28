class Ball{
    constructor(x,y,radius){
    var options ={
    
    'restitution':4,
    'friction':3,
    'density':25,
    isStatic:false
    
    
    
    }
    
    this.body=Bodies.circle(x,y,radius,options);
this.radius=radius;
    World.add(world,this.body);

   
    
    
    }
    
    display(){
    var pis=this.body.position;
    pis.x=mouseX
    pis.y=mouseY
    push();
    translate(pis.x,pis.y);
    ellipse(RADIUS);
    circle(0,0,this.radius)
  
    pop();
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    }