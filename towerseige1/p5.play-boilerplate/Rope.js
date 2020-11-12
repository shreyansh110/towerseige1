class rope{
constructor(bodyA,pb){
var options={
bodyA:pointA,
pointB:pb,
stiffness:0.04,
length:10
}


this.rope=Constraint.create(options);
World.add(world,this.rope);


}

    display(){
if(this.rope.pointA){

    bodyA=null
var pointA=this.rope.bodyA.position;
var pointB=this.rope.pointB;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);


}


    }













}