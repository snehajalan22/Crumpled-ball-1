
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1366, 691);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1100,640);
	paperObject=new paper(200,350,40);
	groundObject= new Ground(400,650,2200,10)
	Engine.run(engine)


}
function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  fill("white");
  textSize(16);
  text("USE UP ARROW KEYS TO MOVE THE PAPER", 200,100);
  text("GOAL: PUT PAPER IN THE DUSTBIN", 200,120);


}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
 	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}