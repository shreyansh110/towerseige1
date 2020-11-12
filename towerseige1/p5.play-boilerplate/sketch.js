const Engine = Matter.Engine;
const World=Matter.World;
const Bodies = Matter.Bodies;

var platform,platform2;

function preload(){

 
}

function setup() {
  createCanvas(1000 ,500);
 
engine=Engine.create();
world=engine.world;

platform= new Support(315,370,210,10);
platform2=new Support(595,200,210,10);

  block1=new Blocks(300,345,30,40);
  block2=new Blocks(330,345,30,40);
  block3=new Blocks(360,345,30,40);
  block4=new Blocks(270,345,30,40);
  block5=new Blocks(240,345,30,40);
  block6=new Blocks(390,345,30,40);
 block7=new Blocks(255,305,30,40);
 block8=new Blocks(285,305,30,40);
 block9=new Blocks(315,305,30,40);
 block10=new Blocks(345,305,30,40);
 block11=new Blocks(375,305,30,40);
 block12=new Blocks(270,265,30,40);
 block13=new Blocks(300,265,30,40);
 block14=new Blocks(330,265,30,40);
 block15=new Blocks(360,265,30,40);
 block16=new Blocks(285,225,30,40);
block17=new Blocks(300,185,30,40);
 block18=new Blocks(315,225,30,40);
 block19=new Blocks(345,225,30,40);
 block20=new Blocks(330,185,30,40);
 block21=new Blocks(315,145,30,40);
 block22=new Blocks(519,175,30,40);
 block23=new Blocks(549,175,30,40);
 block24=new Blocks(579,175,30,40);
 block25=new Blocks(609,175,30,40);
 block26=new Blocks(639,175,30,40);
 block27=new Blocks(669,175,30,40);
 block28=new Blocks(534,135,30,40);
 block29=new Blocks(564,135,30,40);
 block30=new Blocks(594,135,30,40);
 block31=new Blocks(624,135,30,40);
block32=new Blocks(654,135,30,40);
 block33=new Blocks(550,95,30,40);
 block34=new Blocks(580,95,30,40);
 block35=new Blocks(610,95,30,40);
 block36=new Blocks(640,95,30,40);
 block37=new Blocks(550,95,30,40);
 block38=new Blocks(595,55,30,40);
 player =new Ball(100,200,10);

  ground1=new Ground(400,380,810,10);
  slingshot=new rope(this.player,{x:100,y:200});
}

function draw() {

  background(225);
  Engine.update(engine);
platform.display();
platform2.display();
block1.display();
block2.display();
player.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
 block28.display();
block29.display();
block30.display();
block31.display();
block32.display();
block33.display();
block34.display();
block35.display();
block36.display();
block37.display();
block38.display();
ground1.display();



}