/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/

var engine, world;

var bgImg
function preload(){
  bgImg = loadImage("snow3.jpg");
}


function setup() {
  createCanvas(800,500);
  engine = Matter.Engine.create();
  world = engine.world;
  snow1 = new Snow(200,200)
}

function draw() {
  background(bgImg);
  Matter.Engine.update(engine);
  snow1.display();  
  //drawSprites();
}