const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,object;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  object=Bodies.rectangle(350,200,100,70);
  World.add(world,object);


  
}

function draw() {
  background("black"); 
  Engine.update(); 

  rect(object.position.x,object.position.y,100,70);
}