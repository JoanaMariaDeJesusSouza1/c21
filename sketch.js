const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var topWall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
ground = new Ground(200,390,400,20);
right = new Ground(390,200,20,400);
left = new Ground(10,200,20,400);
topWall = new Ground(200,10,400,20);



}

function draw() 
{
  background(0);
  Engine.update(engine);

  ground.display();
  right.display();
  left.display();
  topWall.display();
}

