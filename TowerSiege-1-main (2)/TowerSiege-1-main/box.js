class Box{
constructor(x,y,width,height){
var options={

'restitution':0.4,
'friction':0.9,
'density':1.2,
isStatic:true

}

this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);

}

display(){
var py=this.body.position
push();
translate(py.x,py.y)
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();

}

}