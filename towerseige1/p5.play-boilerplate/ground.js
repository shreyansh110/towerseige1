class Ground{
    constructor(x,y,width,height){
    var options ={
    
    'restitution':1,
    'friction':1,
    'density':6,
    isStatic:true
    
    
    }
    
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    
    
    
    
    }
    
    display(){
    var pas=this.body.position;
    push();
    translate(pas.x,pas.y);
    rectMode(CENTER);
    rect(0,0,this.width,this.height)
    pop();
    
    
    
    
    
    
    
    }
    
    
    
    
    
    
    
    }