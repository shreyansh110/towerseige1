class Box{
constructor(x,y,width,height,angle){
var options={

'restitution':0.8,
'friction':0.9,
'density':1.2,
isStatic:false

}

this.body=Bodies.rectangle(x,y,width,height,angle,options);
this.width=width;
this.height=height;
World.add(world,this.body);

}

display(){
var py=this.body.position
var angle=this.body.angle;
push();
translate(py.x,py.y);
rotate(angle)
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();

}

}