class Ball{
    constructor(x,y,radius){
    var options ={
    
    'restitution':1,
    'friction':3,
    'density':50,
    isStatic:false
    
    
    
    }
    this.polygon=loadImage("polygon_img.png");
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
circle(0,0,this.width,this.height);
    

    pop();

    
    }
 
    
    }