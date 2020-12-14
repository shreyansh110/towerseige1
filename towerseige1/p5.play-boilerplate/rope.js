class Rope{
constructor(pointA,pb){
var options={
bodyA:pointA,
pointB:pb,
stiffness:0.04,
length:10
}


this.Rope=Constraint.create(options);
World.add(world,this.Rope);


}



fly(){

    this.Rope.bodyA=null;
}
    display(){
if(this.Rope.pointA){

 
var pointA=this.Rope.bodyA.position;
var pointB=this.Rope.pointB;
strokeWeight(4);
line(pointA.x,pointA.y,pointB.x,pointB.y);


}


    }













}