
//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;

function setup() {
  var canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

 var properties_ground={
   //key:value
  isStatic:  false


 }
  ground=Bodies.rectangle(200,300,200,20,properties_ground);
  World.add(world,ground);

}

function draw() {
  background("pink");
  Engine.update(engine);  
  rectMode(CENTER);
  rect( ground.position.x,ground.position.y,400,20);
 
}