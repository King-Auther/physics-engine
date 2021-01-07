const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine, world;
var object;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;

 var options={
   isStatic :true
 }

 object = Bodies.rectangle (200,100,50,50);
 World.add(world,object);
 ground = Bodies.rectangle (200,380,400,20,options)
 World.add(world,ground);
 var options ={
   restitution:1.25
}
 ball =Bodies.circle (100,50,20,options)
 World.add(world,ball);
}

function draw() {
  background(0);
  Engine.update(engine); 
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
}