const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world, box1, box2, ground;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world  = engine.world;
  box1 = new Box(200,300,50,50);
  box2 = new Box(200,100,50,100);
  ground = new Ground(200,height,400,20);

}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  console.log(box2.body.position.x);
  console.log(box2.body.position.y);
  console.log(box2.angle);
  box1.display();
  box2.display();
  ground.display();
  
}